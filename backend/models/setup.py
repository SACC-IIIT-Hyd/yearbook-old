from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.String, primary_key=True)
    first_name = db.Column(db.String(80))
    last_name = db.Column(db.String(80))
    # user_type = db.Column(db.String(20))
    profile_created = db.Column(db.Boolean, default=False)

class ContactDetails(db.Model):
    id = db.Column(db.String, db.ForeignKey('user.id'), primary_key=True)
    college_email = db.Column(db.String(120))
    personal_email = db.Column(db.String(120))
    phone_number = db.Column(db.String(20))
    # alternate_number = db.Column(db.String(20))
    home_town = db.Column(db.String(50))

class ProfileDetails(db.Model):
    id = db.Column(db.String, db.ForeignKey('user.id'), primary_key=True)
    q1 = db.Column(db.String(500))
    q2 = db.Column(db.String(500))
    q3 = db.Column(db.String(500))
    q4 = db.Column(db.String(500))
    q5 = db.Column(db.String(500))
    q6 = db.Column(db.String(500))
    post_graduation = db.Column(db.String(500))
    tagline = db.Column(db.String(500))
    clubs = db.Column(db.String(500))
    achievements = db.Column(db.String(500))

class UserDetails(db.Model):
    id = db.Column(db.String, db.ForeignKey('user.id'), primary_key=True)
    dob = db.Column(db.Date)
    type_of_degree = db.Column(db.String(50))
    year_of_joining = db.Column(db.String(20))
    branch = db.Column(db.String(50))
    nick_name = db.Column(db.String(80))

class Media(db.Model):
    sacc_id = db.Column(db.String, db.ForeignKey('user.id'))
    path = db.Column(db.String(50), primary_key=True)
    # 1 - profile, 2 - group and 3 - photowall
    media_type = db.Column(db.Integer)

class Testimonials(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    from_id = db.Column(db.String, db.ForeignKey('user.id'))
    to_id = db.Column(db.String, db.ForeignKey('user.id'))
    text = db.Column(db.String(500))
    date_created = db.Column(db.DateTime)
    last_updated = db.Column(db.DateTime)
    preference_number = db.Column(db.Integer)

class Questions(db.Model):
    qid = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(500))

class Response(db.Model):
    qid = db.Column(db.Integer, db.ForeignKey('questions.qid'), primary_key=True)
    sacc_id = db.Column(db.String, db.ForeignKey('user.id'), primary_key=True)
    response_id = db.Column(db.String, db.ForeignKey('user.id'), primary_key=True)

class Suggestions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sacc_id = db.Column(db.String, db.ForeignKey('user.id'))
    test = db.Column(db.String(500))
    page = db.Column(db.Integer)
