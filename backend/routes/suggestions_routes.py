from models.setup import db, Suggestions
from flask import Blueprint, request, jsonify

main_suggestions = Blueprint("main_suggestions", __name__)


@main_suggestions.route("/add_suggestions", methods=["POST"])
def add_suggestions():
    try:
        data = request.get_json()
        new_suggestion = Suggestions(
            id=data["id"], sacc_id=data["sacc_id"], test=data["test"], page=data["page"]
        )
        db.session.add(new_suggestion)
        db.session.commit()
        return jsonify({"message": "New suggestion added"})
    except Exception as e:
        return jsonify({"error": str(e)})
