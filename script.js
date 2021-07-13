const nav = document.getElementById("navbars");
const container = document.querySelectorAll(".contain");
const ups = document.querySelectorAll(".fa-chevron-down");
let active = 0;

function show(){
    nav.style.right = "0";
}
function hide(){
    nav.style.right = "-100%";
}
function move(){
    nav.style.right = "-100%";
}
ups.forEach((up)=>{
    up.addEventListener("click", ()=>{
        up.parentElement.parentElement.classList.toggle("live");
    })
})
const newBtn = document.getElementById("new-btn");
const success = document.getElementById("success");
const printName = document.getElementById("user-name");
const okBtn = document.getElementById("ok");

newBtn.addEventListener("click" ,(e)=>{
    
    let email = document.getElementById("mail").value;
    let message = document.getElementById("msg").value;
    let userName = document.getElementById("name").value;
    if(userName.trim() != "" && email != "" && message.trim() != ""){
        success.style.display = "flex";
        e.preventDefault();
        printName.innerText = `Thankyou ${userName}`;
        document.getElementById("name").value = "";
        document.getElementById("msg").value = "";
        document.getElementById("mail").value = "";
    }
})

okBtn.addEventListener("click",()=>{
    success.style.display = "none";
})

