const form = document.querySelector(".login form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");

form.onsubmit = (e)=>{
    e.preventDefault();
    // console.log(e);
}
continueBtn.onclick = ()=>{

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/login.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // alert(xhr.responseText);
            if (xhr.status === 200) {
                let data = xhr.response;
                console.log(data);
                if (data == "success") {
                    location.href = "users.php";
                } else {
                    errorText.textContent = data;
                    errorText.style.display = "block";
                }
            }
        }
    }
    //sending the form data through ajax to php
    let formData = new FormData(form);
    xhr.send(formData);
}

// continueBtn.onclick = ()=>{

//     let xhr1 = new XMLHttpRequest();
//     xhr1.open("POST", "php/signup.php", true);
//     xhr1.onreadystatechange = function() {
//         if (xhr1.readystate == XMLHttpRequest.Done) {
//             // alert(xhr.responseText);
//             if (xhr1.status === 200) {
//                 let data1 = xhr1.response;
//                 console.log(data1);
//             }
//         }
//     }
//     xhr1.send();
// }