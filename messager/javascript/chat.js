const form = document.querySelector(".typing-area"),
inputField = document.querySelector(".input-field"),
sendBtn = form .querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=>{
    e.preventDefault();
}

sendBtn.onclick = ()=>{

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // alert(xhr.responseText);
            if (xhr.status === 200) {
                inputField.value = "";//When message insered to Databse then leave the input field blank
                // let dat = xhr.response;
                // console.log(dat);
                scrollToBottom();
            }
        }
    }
    //sending the form data through ajax to php
    let formData = new FormData(form);
    xhr.send(formData);
}


chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}
chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}


setInterval(()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onreadystatechange = ()=>{
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // alert(xhr.responseText);
            if (xhr.status === 200) {
                let data = xhr.responseText;
                // console.log(data);
                chatBox.innerHTML = data;
                if (!chatBox.classList.contains("active")) {
                    scrollToBottom();
                }
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
    // xhr.send();
}, 500); //this will run after frequntly after 500ms

function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}