const texts = document.querySelector(".texts");  
window.SpeechRecognition =  
 window.SpeechRecognition || window.webkitSpeechRecognition;  
const recognition = new SpeechRecognition();  
recognition.interimResults = true;  
let p = document.createElement("p");  
recognition.addEventListener("result", (e) => {  
 texts.appendChild(p);  
 const text = Array.from(e.results)  
  .map((result) => result[0])  
  .map((result) => result.transcript)  
  .join("");  
 p.innerText = text;  
 if (e.results[0].isFinal) {  
  if (text.includes("how are you")) {  
   p = document.createElement("p");  
   p.classList.add("replay");  
   p.innerText = "I am fine";  
   texts.appendChild(p);  
  }  
  if (     text.includes("what's your name") ||  text.includes("what is your name")  ) 
  {  
   p = document.createElement("p");  
   p.classList.add("replay");  
   p.innerText = "My Name is Manish";  
   texts.appendChild(p);  
  }  
  if (text.includes("YouTube")) {  
   p = document.createElement("p");  
   p.classList.add("replay");  
   p.innerText = "opening youtube channel";  
   texts.appendChild(p);  
   console.log("opening youtube");  
   window.open("https://www.youtube.com/");  
  }
  if (text.includes("WhatsApp")) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "opening youtube channel";  
    texts.appendChild(p);  
    console.log("opening whatsapp");  
    window.open("https://web.whatsapp.com/");  
   }
   if (text.includes("comedy")) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "opening youtube channel";  
    texts.appendChild(p);  
    console.log("opening youtube");  
    window.open("https://www.youtube.com/results?search_query=stand+up+comedy");  
   }
   if (text.includes("cs50")) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "opening youtube channel";  
    texts.appendChild(p);  
    console.log("opening whatsapp");  
    window.open("https://www.youtube.com/playlist?list=PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu");  
   }  
  p = document.createElement("p");  
 }  
});  
recognition.addEventListener("end", () => {  
 recognition.start();  
});  
recognition.start(); 