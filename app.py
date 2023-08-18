from flask import Flask
from flask_socketio import SocketIO
from pages.chat_page import chat

socketio = SocketIO()
app = Flask(__name__)
app.config['DEBUG'] = True
app.register_blueprint(chat)
socketio.init_app(app)

if __name__ == '__main__':
    socketio.run(app)