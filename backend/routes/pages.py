from flask import Blueprint, request, jsonify
from routes.user import profile_required
from routes.authentication import login_required

pages = Blueprint('pages', __name__)


@pages.route('/about')
@pages.route('/polls')
@pages.route('/suggestions')
@pages.route('/testimonials')
@login_required
@profile_required
def check_profile(current_user=None):
    if current_user is not None:
        return True
    else:
        return False
    