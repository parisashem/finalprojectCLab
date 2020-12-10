window.addEventListener('load', function () {

    //Open and connect socket
    let socket = io();
    //Listen for confirmation of connection
    socket.on('connect', function () {
        console.log("Connected");
    });

    /* --- Code to RECEIVE a socket message from the server --- */
    let chatBox = document.getElementById('chat-box-msgs');

    socket.on('msg', function (data) {
        console.log("Message arrived!");
        if (data.id === 1) {
            
            let receivedMsg = data.name + ": " + data.msg;
            let msgEl = document.createElement('p');
            msgEl.innerHTML = receivedMsg;

            
            chatBox.appendChild(msgEl);
           
            chatBox.scrollTop = chatBox.scrollHeight;
        }
        console.log(data);
    });

    
    let nameInput = document.getElementById('name-input')
    let msgInput = document.getElementById('msg-input');
    let sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        let curName = nameInput.value;
        let curMsg = msgInput.value;
        let msgObj = { "name": curName, "msg": curMsg, "id": 1 };
 
        
        socket.emit('msg', msgObj);
    });

    let radioinput1 = document.getElementById("first-choice");
    let radioinput2 = document.getElementById("second-choice");
    radioinput1.addEventListener('change', startinputdisable);
    radioinput2.addEventListener('change', startinputdisable);

    let radiochosen = false;

    function startinputdisable(event) {
        console.log("chosen");
        if (radiochosen === false) {


            setTimeout(() => {
                radioinput1.disabled = true;
                radioinput2.disabled = true;
                analyze(radioinput1, radioinput2);
            }, 5000);
            radiochosen = true;
        }
    }

    function analyze(r1, r2) {
        let tr = r1.parentElement.parentElement;
        let answer = tr.getAttribute("answer");

        if (answer === "1") {
            console.log(r1.checked ? "correct" : "incorrect");
        } else {
            console.log(r2.checked ? "correct" : "incorrect");
            
        }
    }
    
});
