from flask import Flask, Blueprint
from os import getenv

from flask import Flask, jsonify, request
from sqlalchemy import inspect
from models.setup import db, User, ContactDetails, ProfileDetails, Media, UserDetails, Testimonials, Questions, Response, Suggestions
from routes.user_routes import main_user
from routes.media_routes import main_media
from routes.polls_routes import main_polls
from routes.testimonials_routes import main_testimonials
from routes.suggestions_routes import main_suggestions


from routers.authentication import blueprint as authentication_blueprint
from routers.trial import blueprint as trial_blueprint

DEBUG = getenv("DEBUG", "False").lower() in ("true", "1", "t")
SECRET_KEY = getenv("SECRET_KEY", "secret-key")

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///Yearbook.db"

api = Blueprint('api', __name__, url_prefix='/api')
api.register_blueprint(authentication_blueprint)
api.register_blueprint(trial_blueprint)

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

@api.route("/")
def index():
    return "Hello, World!"

app.register_blueprint(api)
app.secret_key = SECRET_KEY

if __name__ == '__main__':
    app.run(debug=DEBUG, host="0.0.0.0", port=5000)
