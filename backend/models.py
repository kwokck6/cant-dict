from bson import ObjectId
from typing import Optional, List
from flask_login import UserMixin


# ignore 'shadow built-in method id' warning, otherwise werkzeug will throw an error.
class User(UserMixin):
    def __init__(self, id, email, user_name, password, words=None):
        self.id: ObjectId = id
        self.email: str = email
        self.user_name: str = user_name
        self.password: str = password
        self.words: Optional[List[ObjectId]] = [] if words is None else words


user_schema = {'$jsonSchema':
                   {'bsonType': 'object',
                    'required': ['email', 'user_name', 'password'],
                    'properties':
                        {'email': {'bsonType': 'string'},
                         'user_name': {'bsonType': 'string'},
                         'password': {'bsonType': 'string'}
                         }
                    }
               }

dict_schema = {'$jsonSchema':
                   {'bsonType': 'object',
                    'required': ['entry', 'jyutping', 'pos', 'categories', 'meaning', 'user_id', 'latest'],
                    'properties':
                        {'entry': {'bsonType': 'string'},
                         'jyutping':
                             {'bsonType': 'array',
                              'items': {'bsonType': 'string'}
                              },
                         'categories':
                             {'bsonType': 'array',
                              'uniqueItems': True,
                              'items': {'bsonType': 'string'}},
                         'pos': {'bsonType': 'array'},
                         'meaning': {'bsonType': 'string', 'maxLength': '255'},
                         'user_id': {'bsonType': 'objectId'},
                         'latest': {'bsonType': 'date'}
                         }
                    }
               }
