from flask import Blueprint, render_template, request, flash, jsonify, redirect, url_for
from flask_login import login_required, current_user
from . import db
import json
from bson import ObjectId, json_util
from datetime import datetime as dt

views = Blueprint('views', __name__)


@views.route('/')
@login_required
def home():
    return render_template('dashboard.html', user=current_user)


@views.route('/your-dict', methods=['GET', 'POST'])
@login_required
def your_dict():
    if request.method == 'POST':
        entry = request.form.get('entry')
        jyutping = request.form.get('jyutping')
        pos = request.form.get('pos')
        print(pos)
        meaning = request.form.get('meaning')

        if len(entry) == 0:
            flash('Entry is empty.', category='danger')
        elif len(jyutping) == 0:
            flash('Pronunciation is empty.', category='danger')
        elif len(pos) == 0:
            flash("Part of speech should not be empty. If you do not know the part of speech, choose 'Unknown'.",
                  category='danger')
        elif len(meaning) == 0 or len(meaning) > 255:
            flash('The description should be between 0 and 255 characters long.')
        else:
            new_word = db.dict.insert_one({'entry': entry, 'jyutping': jyutping.split(','), 'pos': pos,
                                           'meaning': meaning.split('\n'), 'user_id': current_user.id,
                                           'latest': dt.now()})
            db.user.update_one({'_id': current_user.id}, {'$addToSet': {'words': new_word.inserted_id}})
            current_user.words.append(new_word.inserted_id)
            flash('成功加入詞條。', category='success')
    return render_template('your_dict.html', user=current_user, words=db.dict.find({'user_id': current_user.id}),
                           count=db.dict.count_documents({'user_id': current_user.id}))


@views.route('/delete-dict', methods=['DELETE'])
@login_required
def delete_word():
    dict = json.loads(request.data)
    word_id = dict['wordId']
    dict = db.dict.find_one({'_id': ObjectId(word_id), 'user_id': current_user.id})
    if dict:
        db.dict.delete_one({'_id': ObjectId(word_id)})
        db.user.update_one({'_id': current_user.id}, {'$pull': {'words': word_id}})
        flash('Word deleted.', category='success')
    return jsonify({})


@views.route('/usage')
def usage():
    return render_template('usage.html', user=current_user)


@views.route('/words')
def get_entries():
    return json_util.dumps(list(db.dict.find({}).limit(10)))


@views.route('/words/<string:_id>')
def get_entry(_id):
    _id = ObjectId(_id)
    return json_util.dumps(db.dict.find_one({'_id': _id}))
