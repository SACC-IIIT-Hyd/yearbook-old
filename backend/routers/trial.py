from flask import Blueprint
from routes.authentication import login_required

blueprint = Blueprint("trial", __name__)

@blueprint.route("/trial")
@login_required
def index(current_user=None):
    print(current_user)
    return current_user
