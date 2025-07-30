let navbar=document.querySelector(".navbar")

window.addEventListener("scroll",function(){
    if(window.scrollY > 50){
        navbar.classList.add("dark-nav")
    }
    else{
        navbar.classList.remove("dark-nav")
    }
})

// Email Authentication before submitting contact form


let submitMessage=document.getElementById("msg")
let name=document.getElementById("name")
let email=document.getElementById("email")
let message=document.getElementById("message")
let button=document.querySelector(".btn-submit")

let emailRegex=/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/


button.addEventListener("click",function(e){
    e.preventDefault()

    if(name.value==""||email.value==""||message.value==""){
        submitMessage.innerText="Please fill in all fields!"
        setTimeout(()=>{
            window.location.reload(true)
        },3000)
    }
    else if(emailRegex.test(email.value)){
        submitMessage.innerText="Submitting form..."
        setTimeout(()=>{
            submitMessage.innerText="Form submission successful!"

            setTimeout(()=>{
                window.location.reload(true)
            },4000)
        },3000)

    }
    else{
        submitMessage.innerText="Submitting form..."
        setTimeout(()=>{
            submitMessage.innerText="Sorry form submission failed! Make sure your email is valid."

        },3000)
    }
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
