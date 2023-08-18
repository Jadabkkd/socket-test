from flask import Blueprint,render_template,request
from flask_socketio import SocketIO

socketio = SocketIO()

chat = Blueprint('chat test',__name__)

@socketio.on('connect')
def testConnect():
    print('User connected!!')

@chat.route('/')
def chatfnc():
    return render_template('chat.html')