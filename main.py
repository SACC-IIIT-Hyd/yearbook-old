from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.codec_options import CodecOptions

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://user:user@alumniyearbook.zdwray5.mongodb.net/Yearbook?retryWrites=true&w=majority"
mongo = PyMongo(app)

validator = {
    "$jsonSchema": {
        "bsonType": "object",
        "title": "User Object Validation",
        "required": ["roll_number", "first_name", "last_name", "date_birth", "phone", "email", "hometown", "hostel", "branch", "clubs"],
        "properties": {
            "roll_number": {
                "bsonType": "int",
                "description": "'roll_number' is required",
                "minLength": 10,
                "maxLength": 10
            },
            "first_name": {
                "bsonType": "string",
                "description": "'First Name' must be a string and it is required"
            },
            "last_name": {
                "bsonType": "string",
                "description": "'Last Name' must be a string and it is required"
            },
            "date_birth": {
                "bsonType": "date",
                "description": "'Date of Birth' must be a string and it is required"
            },
            "phone": {
                "bsonType": "string",
                "description": "'Phone' must be a string and it is required",
                "minLength": 10,
                "maxLength": 10
            },
            "email": {
                "bsonType": "string",
                "description": "'Email' must be a string and it is required",
                "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
            },
            "tagline": {
                "bsonType": "string",
                "description": "'Tagline' must be a string and it is required"
            },
            "hometown": {
                "bsonType": "string",
                "description": "'Hometown' must be a string and it is required"
            },
            "hostel": {
                "bsonType": "string",
                "description": "'Hostel' must be a string and it is required"
            },
            "branch": {
                "bsonType": "string",
                "description": "'Branch' must be a string and it is required"
            },
            "clubs": {
                "bsonType": "array",
                "description": "'Clubs' must be an array and it is required"
            }
        }
    }
}

# Set codec_options
codec_options = CodecOptions(unicode_decode_error_handler='ignore')

# Create collection with validators
mongo.db.create_collection(
    "Hello_check",
    validator=validator,
    codec_options=codec_options,
    validationLevel="strict",
    validationAction="error"
)

# @app.route('/add_user', methods=['POST'])
# def add_user():
#     data = request.get_json()
#     if not data:
#         return jsonify({'message': 'No input data provided'}), 400
#     user_id = mongo.db.Users_final223.insert_one(data).inserted_id
#     new_user = mongo.db.Users_final223.find_one({'_id': user_id })
#     return dumps(new_user), 201

app.run(port=5001)
