from models.setup import db, User, ContactDetails, ProfileDetails, UserDetails, Media
from flask import Blueprint, request, jsonify, redirect
from functools import wraps
from datetime import datetime

from routes.authentication import login_required

main_user = Blueprint('main_user', __name__)
PROFILE_URL = "/profile"


@main_user.route('/user/add', methods=['POST'])
def add_user():
    try:
        data = request.get_json()
        new_user = User(
            id=data['id'], first_name=data['first_name'], last_name=data['last_name'])
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'New user added'})
    except Exception as e:
        return jsonify({'error': str(e)})


@main_user.route('/profile', methods=['GET'])
@login_required
def get_profile(current_user=None):
    try:
        if current_user:
            print(current_user)
            user = User.query.get(current_user['roll_no'])
            if user is None:
                return jsonify({'error': 'User not found'})
            # return jsonify({'error': 'User not found'})

            user_details = UserDetails.query.get(current_user['roll_no'])
            contact_details = ContactDetails.query.get(current_user['roll_no'])

            if user_details is None:
                # empyt user details
                user_details = UserDetails(id=current_user['roll_no'], dob="", type_of_degree="",
                                           year_of_joining="", branch="", nick_name="", home_town="", tagline="")

            if contact_details is None:
                # empty contact details
                contact_details = ContactDetails(id=current_user['roll_no'], college_email="",
                                                 personal_email="", phone_number="",
                                                 instagram="", linkedin="")

            dob = user_details.dob if user_details.dob else ""
            if dob:
                dob = dob.strftime('%Y-%m-%d')

            # get the latest profile photo
            profile_photo = Media.query.filter_by(
                id=current_user['roll_no'], media_type=1).order_by(Media.timestamp.desc()).first()

            if profile_photo:
                profile_photo = profile_photo.path

            profile_page = {
                "name": user.first_name + " " + user.last_name,
                "email1": contact_details.college_email if contact_details.college_email else "",
                "email2": contact_details.personal_email if contact_details.personal_email else "",
                "phone": contact_details.phone_number if contact_details.phone_number else "",
                "hometown": user_details.home_town if user_details.home_town else "",
                "degree_type": user_details.type_of_degree if user_details.type_of_degree else "",
                "join_year": user_details.year_of_joining if user_details.year_of_joining else "",
                "branch": user_details.branch if user_details.branch else "",
                "nick_name": user_details.nick_name if user_details.nick_name else "",
                "tagline": user_details.tagline if user_details.tagline else "",
                "roll_no": current_user['roll_no'],
                "instagram": contact_details.instagram if contact_details.instagram else "",
                "linkedin": contact_details.linkedin if contact_details.linkedin else "",
                "dob": dob,
                "photo": profile_photo if profile_photo else ""
            }

            return jsonify(profile_page)

        return jsonify({'error': 'User not found'})
    except Exception as e:
        return jsonify({'error': str(e)})


@main_user.route('/profile/add', methods=['POST'])
@login_required
def add_details(current_user=None):
    try:
        data = request.get_json()

        data['rollno'] = current_user['roll_no']
        # data['rollno'] = "2022111026"  # Remove this line after testing

# print data without photo
        data_without_photo = data.copy()
        data_without_photo.pop('photo', None)

        print("Data", data_without_photo)
        contact = ContactDetails.query.get(data['rollno'])
        user_details = UserDetails.query.get(data['rollno'])

        if not contact:
            return jsonify({'error': 'Contact details not found'})

        contact.personal_email = data.get('email2', contact.personal_email)
        contact.phone_number = data.get('phone', contact.phone_number)
        contact.instagram = data.get('instagram', contact.instagram)
        contact.linkedin = data.get('linkedin', contact.linkedin)

        dob = datetime.strptime(data['dob'], '%Y-%m-%d')

        if not user_details:
            user_details = UserDetails(id=data['rollno'], dob=dob, type_of_degree=data['degree_type'],
                                       year_of_joining=data['join_year'], branch=data['branch'],
                                       nick_name=data['nick_name'], home_town=data['hometown'],
                                       tagline=data['tagline'])
            db.session.add(user_details)

        else:
            user_details.dob = dob
            user_details.type_of_degree = data.get(
                'degree_type', user_details.type_of_degree)
            user_details.year_of_joining = data.get(
                'join_year', user_details.year_of_joining)
            user_details.branch = data.get('branch', user_details.branch)
            user_details.nick_name = data.get(
                'nick_name', user_details.nick_name)
            user_details.home_town = data.get(
                'hometown', user_details.home_town)
            user_details.tagline = data.get('tagline', user_details.tagline)

        if 'photo' in data:
            photo = Media(id=data['rollno'], path=data['photo'],
                          media_type=1, timestamp=datetime.now())
            db.session.add(photo)

        user = User.query.get(data['rollno'])
        user.profile_created = True
        db.session.commit()
        print("Profile created for user with id: ", data['rollno'])

        return jsonify({'message': 'Profile created', 'error': None})
    except Exception as e:
        return jsonify({'error': str(e)})


@main_user.route('/about/add', methods=['POST'])
@login_required
def add_profile_details():
    try:
        data = request.get_json()
        new_profile = ProfileDetails(id=data['id'], q1=data['q1'], q2=data['q2'], q3=data['q3'], q4=data['q4'], q5=data['q5'], q6=data['q6'],
                                     nick_name=data['nick_name'], post_graduation=data['post_graduation'], tagline=data['tagline'], clubs=data['clubs'], achievements=data['achievements'])
        db.session.add(new_profile)
        db.session.commit()
        return jsonify({'message': 'New profile details added'})
    except Exception as e:
        return jsonify({'error': str(e)})


@main_user.route('/update_details', methods=['POST'])
def update_details():
    try:
        data = request.get_json()
        contact = ContactDetails.query.get(data['id'])
        user_details = UserDetails.query.get(data['id'])

        if contact and user_details:
            contact.college_email = data.get(
                'college_email', contact.college_email)
            contact.personal_email = data.get(
                'personal_email', contact.personal_email)
            contact.phone_number = data.get(
                'phone_number', contact.phone_number)
            contact.home_town = data.get('home_town', contact.home_town)

            user_details.dob = data.get('dob', user_details.dob)
            user_details.type_of_degree = data.get(
                'type_of_degree', user_details.type_of_degree)
            user_details.year_of_joining = data.get(
                'year_of_joining', user_details.year_of_joining)
            user_details.branch = data.get('branch', user_details.branch)

            db.session.commit()
            return jsonify({'message': 'Details updated'})
        else:
            return jsonify({'message': 'No details found with the provided id'})
    except Exception as e:
        return jsonify({'error': str(e)})


@main_user.route('/update_profile_details', methods=['POST'])
def update_profile_details():
    try:
        data = request.get_json()
        profile = ProfileDetails.query.get(data['id'])

        if profile:
            profile.q1 = data.get('q1', profile.q1)
            profile.q2 = data.get('q2', profile.q2)
            profile.q3 = data.get('q3', profile.q3)
            profile.q4 = data.get('q4', profile.q4)
            profile.q5 = data.get('q5', profile.q5)
            profile.q6 = data.get('q6', profile.q6)
            profile.nick_name = data.get('nick_name', profile.nick_name)
            profile.post_graduation = data.get(
                'post_graduation', profile.post_graduation)
            profile.tagline = data.get('tagline', profile.tagline)
            profile.clubs = data.get('clubs', profile.clubs)
            profile.achievements = data.get(
                'achievements', profile.achievements)

            db.session.commit()
            return jsonify({'message': 'Profile details updated'})
        else:
            return jsonify({'message': 'No profile details found with the provided id'})
    except Exception as e:
        return jsonify({'error': str(e)})


@main_user.route('/display_user_info', methods=['GET'])
def display_user_info():
    try:
        user_id = request.args.get('id')
        user_details = UserDetails.query.get(user_id)
        contact_details = ContactDetails.query.get(user_id)
        profile_details = ProfileDetails.query.get(user_id)
        media_details = Media.query.filter_by(sacc_id=user_id).filter(
            Media.media_type.in_([1, 2])).all()

        if user_details and contact_details and profile_details and media_details:
            user_info = {
                'Name': user_details.name,
                'Phone Number': contact_details.phone_number,
                'Branch': user_details.branch,
                'Personal Email': contact_details.personal_email,
                'Nickname': profile_details.nick_name,
                'Tagline': profile_details.tagline,
                'Q1': profile_details.q1,
                'Q2': profile_details.q2,
                'Q3': profile_details.q3,
                'Q4': profile_details.q4,
                'Q5': profile_details.q5,
                'Q6': profile_details.q6,
                'Media': [media.media_link for media in media_details],
                'After IIIT': profile_details.post_graduation,
                'Clubs': profile_details.clubs,
                'Achievements': profile_details.achievements
            }
            return jsonify(user_info)
        else:
            return jsonify({'message': 'No user found with the provided id'})
    except Exception as e:
        return jsonify({'error': str(e)})


def profile_required(f):
    @wraps(f)
    def decorated(current_user, *args, **kwargs):
        # Check if current_user exists and has a profile
        if current_user:
            print(current_user)
            profile = User.query.get(current_user['id'])
            if profile is not None and profile.profile_created:
                # Call the original function with current user and any additional arguments
                return f(current_user, *args, **kwargs)
            else:
                # Return error response if profile not found
                return redirect(PROFILE_URL)
        # Return error response if profile not found
        return jsonify({
            "message": "Profile not found",
            "data": None,
            "error": "Profile not found",
        }), 404

    return decorated
