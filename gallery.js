// Code for the navbar

let navbar=document.querySelector(".navbar")

window.addEventListener("scroll",()=>{
    if(window.scrollY > 50){
        navbar.classList.add("dark-nav")
    }
    else{
        navbar.classList.remove("dark-nav")
    }
})

// Contact link code 

let contactLink=document.querySelector(".contact-link")

contactLink.addEventListener("click",function(){
    window.location.href="contact.html"
})

// Gallery code

let list=document.querySelectorAll(".list")
let itembox=document.querySelectorAll(".itembox")

for(let i=0; i<list.length;i++){
    list[i].addEventListener("click",function(){
        for(let j=0;j<list.length;j++){
            list[j].classList.remove("active")
        }
        list[i].classList.add("active")

        let dataFilter=this.getAttribute("data-filter")
        for(let k=0;k<itembox.length;k++){
            itembox[k].classList.remove("active")
            itembox[k].classList.add("hide")

            if(itembox[k].getAttribute("data-item")==dataFilter|| dataFilter=="all"){
                itembox[k].classList.remove("hide")
                itembox[k].classList.add("active")

            }
        }
    })
}




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
