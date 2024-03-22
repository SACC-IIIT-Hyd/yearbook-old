from models.setup import db, Testimonials
from flask import Blueprint, request, jsonify
from datetime import datetime

main_testimonials = Blueprint("main_testimonials", __name__)


@main_testimonials.route("/add_testimonials", methods=["POST"])
def add_testimonials():
    try:
        data = request.get_json()
        current_time = datetime.now()
        new_testimonial = Testimonials(
            id=data["id"],
            from_id=data["from_id"],
            to_id=data["to_id"],
            text=data["text"],
            date_created=current_time,
            last_updated=current_time,
            preference_number=data["preference_number"],
        )
        db.session.add(new_testimonial)
        db.session.commit()
        return jsonify({"message": "New testimonial added"})
    except Exception as e:
        return jsonify({"error": str(e)})


@main_testimonials.route("/update_testimonials", methods=["POST"])
def update_testimonials():
    try:
        data = request.get_json()
        testimonial = Testimonials.query.get(data["id"])

        if testimonial:
            testimonial.text = data.get("text", testimonial.text)
            testimonial.last_updated = datetime.now()
            testimonial.preference_number = data.get(
                "preference_number", testimonial.preference_number
            )

            db.session.commit()
            return jsonify({"message": "Testimonial updated"})
        else:
            return jsonify({"message": "No testimonial found with the provided id"})
    except Exception as e:
        return jsonify({"error": str(e)})
