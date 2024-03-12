from models.setup import db, Media
from flask import Blueprint, request, jsonify
from datetime import datetime

main_media = Blueprint('main_media', __name__)

@main_media.route('/add_media', methods=['POST'])
def add_media():
    try:
        data = request.get_json()
        timestamp = datetime.now().strftime('%d_%m_%H_%M_%S')
        extension = data['path'].split('.')[-1] if '.' in data['path'] else ''
        filename = f"{data['sacc_id']}_{timestamp}.{extension}"
        new_media = Media(sacc_id=data['sacc_id'], path=filename, media_type=data['path'])
        db.session.add(new_media)
        db.session.commit()
        return jsonify({'message': 'New media added', 'filename': filename})
    except Exception as e:
        return jsonify({'error': str(e)})