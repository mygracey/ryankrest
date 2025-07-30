let contactLink=document.querySelector(".contact-link")

contactLink.addEventListener("click",function(){
    window.location.href="contact.html"
})

// Navbar program to cause the dark nav to appear once the scrolling starts

let navbar=document.querySelector(".navbar")

window.addEventListener("scroll",function(){
    if(window.scrollY > 50){
        navbar.classList.add("dark-nav")
    }
    else{
        navbar.classList.remove("dark-nav")
    }
})

// Chatbot input area program to hide and show outline and border


let input=document.querySelector("input")

input.addEventListener("click",function(){
    input.style.border="none"
    input.style.outline="3px solid gray"
})


// Chat bot program

let messageContainer=document.querySelector(".message-area")
let inputBox=document.querySelector(".input-box")
let sendBtn=document.querySelector(".btn-send")


sendBtn.addEventListener("click",sendMessage)

inputBox.addEventListener("keypress",function(e){
    if(e.key==="Enter") 
        sendMessage()
    
        
})


// create the send message function


function sendMessage(){
    const userMessage=document.querySelector(".input-box").value;

    if(userMessage){
        appendMessage("user",userMessage);
        document.getElementsByClassName("input-box").value;
        
        getBotResponse(userMessage);
    }

}


function appendMessage(sender,message){
    const messageContainer=document.querySelector(".message-area")
    const messageElement=document.createElement("div")
    messageElement.classList.add("message",sender)
    messageElement.textContent=message
    messageContainer.appendChild(messageElement)
    messageContainer.scrollTop=messageContainer.scrollHeight;
}


async function getBotResponse(userMessage){

    const API_KEY="AIzaSyCNbgfsF4Y8KgRSGB5gSVuyz0clOV-LqmU"
    const API_URL=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`

    try{
        const response=await fetch(API_URL,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                contents:[
                    {
                        parts:[{text: userMessage}],
                    },
                ],
            }),
        });

            const data=await response.json();

            if(!data.candidates || !data.candidates.length){
                throw new Error("No response from Gemini API");
            }

            const botMessages = data.candidates[0].content.parts[0].text;

            appendMessage("bot",botMessages);
    
    }
    catch(error){
        console.error("Error:",error);
        appendMessage(
            "bot",
            "Sorry, I'm having trouble responding. Please try again."
        );

    }
}


// Clear chat function


let clearChat=document.querySelector(".btn-clear")

clearChat.addEventListener("click",function(){
    window.location.reload(true)
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
