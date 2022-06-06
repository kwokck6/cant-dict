from flask import Flask
from flask_pymongo import PyMongo
from bson import ObjectId
from flask_login import LoginManager, AnonymousUserMixin

client = PyMongo()
db = client.db


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'HongKongCantoneseDictionary'
    # app.config['MONGO_URI'] = f'mongodb://localhost:27017/{DB_NAME}'
    app.config['MONGO_URI'] = f'mongodb+srv://KwokCK:KwokCK6805@website.g3fvh.mongodb.net/dictionary'
    client.init_app(app=app)
    global db
    db = client.db
    create_database(db)

    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(_id):
        from .models import User
        user = db.user.find_one({'_id': ObjectId(_id)})
        if user:
            return User(*user.values())
        return AnonymousUserMixin()

    return app


def create_database(db):
    from .models import user_schema, dict_schema
    if db.user is None:
        db.create_collection('user', validator=user_schema, validateLevel='strict')
    if db.dict is None:
        db.create_collection('dict', validator=dict_schema, validateLevel='strict')
