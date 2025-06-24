let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");
function speak(text,lang = "hi-GB") {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = lang;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    console.log(hours);

    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

// Uncomment the below lines to greet when the page loads
// window.addEventListener('load', () => {
//     wishMe();
// });

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    // console.log(event);
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none"
    voice.style.display = "block"
});

function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"


    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello sir, what can I help you with?");
    }
    else if(message.includes("who are you")){
        speak("I am virtual assistant ,created by Mr Praveen")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open twitter")){
        speak("opening twitter...")
        window.open("https://www.twitter.com","_blank")
    }
    else if(message.includes("open netflix")){
        speak("opening netflix...")
        window.open("https://www.netflix.com","_blank")
    }
    else if(message.includes("open snapchat")){
        speak("opening snapchat...")
        window.open("https://www.snapchat.com","_blank")
    }
    else if (message.includes("open spotify")) {
        speak("opening Spotify...");
        window.open("https://www.spotify.com", "_blank");
    }
    else if (message.includes("open instagram")) {
        speak("opening Instagram...");
        window.open("https://www.instagram.com", "_blank");
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator...");
        window.open("calculator://");
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp...");
        window.open("whatsapp://");
    }

    // ------------------------------------------------------------------------------------------------------------



    else if (message.includes("say about you")) {
        speak("I am an AI-powered virtual assistant, trained using HTML, CSS, JavaScript, and A P I 's — built by Mr. Praveen.");
    }
    else if (message.includes("say about hari")) {
        speak("you likes her .. am i right");
        
    }
    else if (message.includes("harichandana")) {
        speak("here is the information");
        window.open("https://www.linkedin.com/in/harichandana-karra-9b75ba291/?originalSubdomain=in");
    }


    //-----------------------------------------------------------------------------------------------------------------

    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time,"en-US")
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date,"en-US")
       
    }
    else{
        let finalText = "This is what I found on the internet regarding " + message.replace("shipra", "").replace("shifra", "");
        window.open(`https://www.google.com/search?q=${message.replace("shipra", "").replace("shifra", "")}`, "_blank");

        speak(finalText)
    }
}


