from ext.sckt import socketio
from flask_socketio import emit

@socketio.on('connect')
def testConnect():
    print('User connected!!')
    
@socketio.on('send_message')
def scktMessage(chatInp):
    emit('new_message',{'message':chatInp},broadcast = True)