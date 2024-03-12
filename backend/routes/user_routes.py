from models.setup import db, User, ContactDetails, ProfileDetails, UserDetails, Media
from flask import Blueprint, request, jsonify

main_user = Blueprint('main_user', __name__)

@main_user.route('/add_user', methods=['POST'])
def add_user():
    try:
        data = request.get_json()
        new_user = User(id=data['id'], first_name=data['first_name'], last_name=data['last_name'])
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'New user added'})
    except Exception as e:
        return jsonify({'error': str(e)})
    
@main_user.route('/add_details', methods=['POST'])
def add_details():
    try:
        data = request.get_json()
        new_contact = ContactDetails(id=data['id'], college_email=data['college_email'], personal_email=data['personal_email'], phone_number=data['phone_number'], home_town=data['home_town'])
        new_user_details = UserDetails(id=data['id'], dob=data['dob'], type_of_degree=data['type_of_degree'], year_of_joining=data['year_of_joining'], branch=data['branch'])
        db.session.add(new_contact)
        db.session.add(new_user_details)
        db.session.commit()
        return jsonify({'message': 'New details added'})
    except Exception as e:
        return jsonify({'error': str(e)})

@main_user.route('/add_profile_details', methods=['POST'])
def add_profile_details():
    try:
        data = request.get_json()
        new_profile = ProfileDetails(id=data['id'], q1=data['q1'], q2=data['q2'], q3=data['q3'], q4=data['q4'], q5=data['q5'], q6=data['q6'], nick_name=data['nick_name'], post_graduation=data['post_graduation'], tagline=data['tagline'], clubs=data['clubs'], achievements=data['achievements'])
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
            contact.college_email = data.get('college_email', contact.college_email)
            contact.personal_email = data.get('personal_email', contact.personal_email)
            contact.phone_number = data.get('phone_number', contact.phone_number)
            contact.home_town = data.get('home_town', contact.home_town)

            user_details.dob = data.get('dob', user_details.dob)
            user_details.type_of_degree = data.get('type_of_degree', user_details.type_of_degree)
            user_details.year_of_joining = data.get('year_of_joining', user_details.year_of_joining)
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
            profile.post_graduation = data.get('post_graduation', profile.post_graduation)
            profile.tagline = data.get('tagline', profile.tagline)
            profile.clubs = data.get('clubs', profile.clubs)
            profile.achievements = data.get('achievements', profile.achievements)

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
        media_details = Media.query.filter_by(sacc_id=user_id).filter(Media.media_type.in_([1, 2])).all()

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
