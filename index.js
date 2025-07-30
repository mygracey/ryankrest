let navbar=document.querySelector(".navbar")


window.addEventListener("scroll",function(){
    if(window.scrollY > 50){
        navbar. classList.add("dark-nav")
    }
    else{
        navbar.classList.remove("dark-nav")
    }
})

// contact link code

contactLink=document.querySelector(".contact-link")

contactLink.addEventListener("click",function(){
    window.location.href="contact.html"
})

// Sub-menu program to open and close it
let close=document.querySelector(".close")
let submenu=document.querySelector(".sub-menu")

let hamburger=document.querySelector(".hamburger")

hamburger.addEventListener("click",function(){
    submenu.style.display="block"
    hamburger.style.display="none"
    close.style.display="block"
})

close.addEventListener("click",function(){
    submenu.style.display="none"
    hamburger.style.display="block"
    close.style.display="none"
})

// code for chatbot-box to link to the chat page

let chatBotBox=document.querySelector(".chatbot-box")

chatBotBox.addEventListener("click",function(){
    window.location.href="chat.html"
})