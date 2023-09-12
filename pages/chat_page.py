from flask import Blueprint,render_template

chat = Blueprint('chat test',__name__)
@chat.route('/')
def chatfnc():
    return render_template('chat.html')