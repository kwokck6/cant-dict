from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import User
from flask_login import login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from . import db

auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        user = db.user.find_one({'email': email})
        if user and check_password_hash(user['password'], password):
            user = User(*user.values())
            flash('Login successful', category='success')
            login_user(user, remember=True)
            return redirect(url_for('views.home'))
        elif len(email) == 0 or len(password) == 0:
            flash('Please enter your email and password.', category='danger')
        elif user is None:
            flash('This account does not exist.', category='danger')
        else:
            flash('Incorrect password.', category='danger')

    return render_template('login.html', user=current_user)


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))


@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        user_name = request.form.get('user_name')
        password = request.form.get('password')
        confirm_password = request.form.get('confirmPassword')

        user = db.user.find_one({'email': email})
        if user:
            flash('User already exists', category='danger')
        elif len(email) < 4:
            flash('Email must be at least 4 characters long', category='danger')
        elif len(user_name) < 6:
            flash('User name must be at least 2 characters long', category='danger')
        elif len(password) < 7:
            flash('Password must be at least 7 characters long', category='danger')
        elif password != confirm_password:
            flash('Passwords do not match', category='danger')
        else:
            new_user_db = db.user.insert_one(
                {'email': email, 'user_name': user_name,
                 'password': generate_password_hash(password, method='sha256')})
            new_user = User(id=new_user_db.inserted_id, email=email, user_name=user_name,
                            password=generate_password_hash(password, method='sha256'))
            flash('Account created!', category='success')
            login_user(new_user, remember=True)
            return redirect(url_for('views.home'))
    return render_template('sign_up.html', user=current_user)
