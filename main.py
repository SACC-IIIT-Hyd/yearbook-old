from flask import Flask, jsonify, request
from sqlalchemy import inspect
from models.setup import db, User, ContactDetails, ProfileDetails, Media, UserDetails, Testimonials, Questions, Response, Suggestions
from routes.user_routes import main_user
from routes.media_routes import main_media
from routes.polls_routes import main_polls
from routes.testimonials_routes import main_testimonials
from routes.suggestions_routes import main_suggestions

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///Yearbook.db"

    db.init_app(app)

    with app.app_context():
        inspector = inspect(db.engine)
        if 'user' not in inspector.get_table_names():
            db.create_all()

    app.register_blueprint(main_user)
    app.register_blueprint(main_media)
    app.register_blueprint(main_polls)
    app.register_blueprint(main_testimonials)
    app.register_blueprint(main_suggestions)

    return app

app = create_app()

@app.route('/')
def print_me():
    return "Hello World" 

app.run(port=5001, debug=True)
