const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector(".users .search button"),
usersList = document.querySelector(".users .users-list");

searchBtn.onclick = ()=>{
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchBtn.classList.toggle("active");
    searchBar.value = "";
}

searchBar.onkeyup = ()=>{
    let searchTerm = searchBar.value;
    if (searchTerm != "") {
        searchBar.classList.add("active");
    }else{
        searchBar.classList.remove("active");
    }
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/search.php", true);
    xhr.onload = ()=>{
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // alert(xhr.responseText);
            if (xhr.status === 200) {
                let data = xhr.response;
                // console.log(data);
                usersList.innerHTML = data;
            }
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("searchTerm=" + searchTerm);
}

setInterval(()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "php/users.php", true);
    xhr.onload = ()=>{
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // alert(xhr.responseText);
            if (xhr.status === 200) {
                let data = xhr.response;
                // console.log(data);
                // usersList.innerHTML = data;
                if (!searchBar.classList.contains("active")){
                    usersList.innerHTML = data;
                    // console.log(data);
                }
            }
        }
    }
    xhr.send();
}, 500); //this will run after frequntly after 500ms


// setInterval(()=>{
//     //starting Ajax
//     let xhr1 = new XMLHttpRequest();
//     xhr1.open("GET", "php/users.php", true);
//     xhr1.onload = ()=>{
//         if (xhr1.readyState === XMLHttpRequest.DONE){
//             if (xhr1.status === 200){
//                 let data = xhr1.response;
//                 alert("hi");
//                 // console.log(data);
//                 // usersList.innerHTML = data;
//                 if (!searchBar.classList.contains("active")){
//                     usersList.innerHTML = data;
//                 }
//             }
//         }
//     }
//     xhr1.send();
// }, 500);