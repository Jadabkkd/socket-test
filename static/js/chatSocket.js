const sendMessage = (socket)=>{
    let sendBtn = document.getElementById('send-btn')
    let chatInpForEnt = document.getElementById('chat-inp')
    sendBtn.addEventListener('click',()=>{
        let chatInp = document.getElementById('chat-inp')
        if (chatInp.value != ''){
            socket.emit('send_message',chatInp.value)
            chatInp.value = '';
        }
    })

    chatInpForEnt.addEventListener('keyup',(e)=>{
        if(e.key == 'Enter'){
            let chatInp = document.getElementById('chat-inp')
            if (chatInp.value != ''){
                socket.emit('send_message',chatInp.value)
                chatInp.value = '';
            }
        }
    })
}

const recieveMessage = (socket)=>{
    let chatBox = document.querySelector('.chat-box')
    socket.on('new_message',(data)=>{
        let chatBoxCnt = document.querySelector('.chat-box').children.length
        console.log(chatBoxCnt)
        let innerDiv = document.createElement('div')
        if(chatBoxCnt % 2 == 0){
            innerDiv.setAttribute('style','justify-content: flex-end;')
        }else{
            innerDiv.setAttribute('style','justify-content: flex-start;')
        }
        innerDiv.textContent = data.message
        chatBox.appendChild(innerDiv)

    })
}

window.addEventListener('load',()=>{
    const socket = io({autoConnect:false})
    socket.connect();
    sendMessage(socket)
    recieveMessage(socket)
})