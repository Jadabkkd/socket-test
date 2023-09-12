from flask import Flask
from ext.sckt import socketio
from pages.chat_page import chat
from socketManager.sktManager import socketio


app = Flask(__name__)
app.config['DEBUG'] = True
app.register_blueprint(chat)
socketio.init_app(app)

if __name__ == '__main__':
    socketio.run(app,port=5000,allow_unsafe_werkzeug=True)