let contactLink=document.querySelector(".contact-link")

contactLink.addEventListener("click",function(){
    window.location.href="contact.html"
})

// navbar bar code

let navbar=document.querySelector(".navbar")

window.addEventListener("scroll",function(){
    if(this.window.scrollY > 50){
        navbar.classList.add("dark-nav")
    }
    else{
        navbar.classList.remove("dark-nav")
    }
})



// Counter programming

let sectionCounter=document.querySelector(".section-counter")
let counters=document.querySelectorAll(".counter-item .counter")

// let speed=200

// counters.forEach((counter,index)=>{
//     function UpdateCounter(){
//         const targetNumber=+counter.dataset.target;
//         const initialNumber=+counter.innerText;
//         const incPerCount=targetNumber/speed;

//         if(initialNumber<targetNumber){
//             counter.innerText=Math.ceil(initialNumber+incPerCount);
//             setTimeout(UpdateCounter,40);
//         }
//     }
//     UpdateCounter();
// })

// Animating the Counter program


let CounterObserver=new IntersectionObserver(
    (entries,observer)=>{
    let [entry]=entries;
    if(entry.isIntersecting) return;
    console.log(entry)
    
    let speed=200

counters.forEach((counter,index)=>{
    function UpdateCounter(){
        const targetNumber=+counter.dataset.target;
        const initialNumber=+counter.innerText;
        const incPerCount=targetNumber/speed;

        if(initialNumber<targetNumber){
            counter.innerText=Math.ceil(initialNumber+incPerCount);
            setTimeout(UpdateCounter,40);
        }
    }
    UpdateCounter();

    if(counter.parentElement.style.animation){
        counter.parentElement.style.animation="";
    }
    else{
        counter.parentElement.style.animation=`slide-up 0.3s ease forwards ${index/counters.length+0.5}s`
    }
})
    
},{
    root: null,
    threshold: 0.4,
})

CounterObserver.observe(sectionCounter);


// Navbar mobile menu program


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