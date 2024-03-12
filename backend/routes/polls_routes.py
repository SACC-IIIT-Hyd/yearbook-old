from models.setup import db, Questions, Response
from flask import Blueprint, request, jsonify

main_polls = Blueprint('main_polls', __name__)

@main_polls.route('/add_polls_questions', methods=['POST'])
def add_polls_questions():
    try:
        data = request.get_json()
        new_poll_question = Questions(qid=data['qid'], text=data['text'])
        db.session.add(new_poll_question)
        db.session.commit()
        return jsonify({'message': 'New poll question added'})
    except Exception as e:
        return jsonify({'error': str(e)})

@main_polls.route('/add_polls_response', methods=['POST'])
def add_polls_response():
    try:
        data = request.get_json()
        new_poll_response = Response(qid=data['qid'], sacc_id=data['sacc_id'], response_id=data['response_id'])
        db.session.add(new_poll_response)
        db.session.commit()
        return jsonify({'message': 'New poll response added'})
    except Exception as e:
        return jsonify({'error': str(e)})
