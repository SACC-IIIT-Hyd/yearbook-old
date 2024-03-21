from flask import Blueprint, request, redirect, url_for, make_response, jsonify
from flask import current_app as app
from urllib.parse import quote_plus
from functools import wraps
from jwt import encode, decode
from cas import CASClient
from os import getenv

from models.setup import db, User, ContactDetails, ProfileDetails, UserDetails, Media

CAS_SERVER_URL = getenv("CAS_SERVER_URL")
SERVICE_URL = getenv("SERVICE_URL")
REDIRECT_URL = getenv("REDIRECT_URL", "/home")
JWT_SECRET_KEY = getenv("JWT_SECRET_KEY", "jwt-secret")

blueprint = Blueprint("authentication", __name__)

# instantiate CAS client
cas_client = CASClient(
    version=3,
    service_url=f"{SERVICE_URL}?next={quote_plus(REDIRECT_URL)}",
    server_url=CAS_SERVER_URL,
)

# Assuming these constants are defined somewhere in your application
AUTH_COOKIE_NAME = "Authorization_YearBook"
LOGIN_ENDPOINT = "api.authentication.login"


def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.cookies.get(AUTH_COOKIE_NAME)
        if not token:
            # Redirect to the login page if token is not present
            return redirect(url_for(LOGIN_ENDPOINT))

        try:
            current_user = decode(token, JWT_SECRET_KEY, algorithms=["HS256"])
        except Exception as e:
            return jsonify({"message": "Authentication failed", "error": str(e)}), 401

        # Call the original function with current user and any additional arguments
        return f(current_user, *args, **kwargs)

    return decorated


def verify_token() -> bool:
    try:
        token = None
        if request.cookies.get(AUTH_COOKIE_NAME):
            token = request.cookies.get(AUTH_COOKIE_NAME)
        if token:
            current_user = decode(token, JWT_SECRET_KEY, algorithms=["HS256"])
            if current_user:
                return True
        return False
    except Exception as e:
        return False


@blueprint.route("/login")
def login():
    # Already logged in
    if request.cookies.get(AUTH_COOKIE_NAME):
        return redirect(REDIRECT_URL)

    next_url = request.args.get("next")
    ticket = request.args.get("ticket")
    if not ticket:
        # No ticket, the request come from end user, send to CAS login
        cas_login_url = cas_client.get_login_url()
        # app.debug("CAS login URL: %s", type(cas_login_url))

        response = redirect(cas_login_url)

        # Add CORS headers to the response
        response.headers.add('Access-Control-Allow-Origin', 'login.iiit.ac.in')
        response.headers.add('Access-Control-Allow-Headers', '*')
        response.headers.add('Access-Control-Allow-Methods',
                             'GET POST PUT DELETE OPTIONS')
        response.headers.add('Access-Control-Allow-Credentials', 'true')

        print(response.headers)
        return response

    # There is a ticket, the request come from CAS as callback.
    # need call `verify_ticket()` to validate ticket and get user profile.
    # app.debug("ticket: %s", ticket)

    user, attributes, pgtiou = cas_client.verify_ticket(ticket)

    # app.debug(
    #     "CAS verify ticket response: user: %s, attributes: %s, pgtiou: %s",
    #     user,
    #     attributes,
    #     pgtiou,
    # )

    if not user:
        return 'Failed to verify ticket. <a href="/api/login">Login</a>'

    # Login successful, make JWT and redirect according to `next` query parameter.
    else:
        payload = {
            "uid": attributes.get("uid"),
            "email": user,
            "name": attributes.get("Name"),
            "roll_no": attributes.get("RollNo"),
            "first_name": attributes.get("FirstName"),
            "last_name": attributes.get("LastName"),
        }

        # app.debug("JWT payload: %s", payload)

        # generate JWT
        token = encode(payload, JWT_SECRET_KEY, algorithm="HS256")

        # send JWT as cookie
        response = make_response(redirect(next_url))
        response.set_cookie(
            AUTH_COOKIE_NAME,
            token,
            httponly=True,
            secure=False,  # TODO: change in prod
            max_age=86400,  # 1 day
        )
        response.set_cookie("login", "true")

        roll_no = payload["roll_no"]
        contact = ContactDetails.query.get(roll_no)
        if not contact:
            contact = ContactDetails(
                id=roll_no,
                college_email=payload["email"],
                # personal_email="",
                # phone_number="",
            )
            db.session.add(contact)
            db.session.commit()

        return response


@blueprint.route("/logout")
def logout():
    redirect_url = url_for(
        "api.authentication.logout_callback", _external=True)
    cas_logout_url = cas_client.get_logout_url(redirect_url)
    # app.debug("CAS logout URL: %s", cas_logout_url)

    return redirect(cas_logout_url)


@blueprint.route("/logoutCallback")
def logout_callback():
    # Expire cookie
    response = make_response()
    response.set_cookie(AUTH_COOKIE_NAME, "", expires=0)
    response.set_cookie("logout", "", expires=0)

    # app.debug(response.headers)

    # Redirect from CAS logout request after logout successful
    return response
