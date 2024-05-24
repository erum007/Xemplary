const button = document.querySelector('.btn-primary');
const content = document.querySelector('.content');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function(){
    const speech = new SpeechSynthesisUtterance;
    speech.text='Voice activated.';
    window.speechSynthesis.speak(speech);
}
recognition.onresult = function(event){
 const current = event.resultIndex;
 const transcript = event.results[current][0].transcript;
 content.textContent = transcript;
 readOutLoud(transcript);
}
button.addEventListener('click', () =>{
recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance;
        if(message.includes('science')){
            speech.text= 'See here';
            window.location.replace("https://xemplary.netlify.app/animation%20(story%20of%20curiosity)");
        };
        if(message.includes('Science')){
            speech.text= 'See here';
            window.location.replace("https://xemplary.netlify.app/animation%20(story%20of%20curiosity)");
        };
        if(message.includes('technology')){
            speech.text= 'See here';
            window.location.replace("https://curiosityfootage.netlify.app/");
        };
        if(message.includes('Technology')){
            speech.text= 'See here';
            window.location.replace("https://curiosityfootage.netlify.app/");
        };
        if(message.includes('arts')){
            speech.text= 'See here';
            window.location.replace("https://xemplary.netlify.app/drawing%20tutorials,%20videos");
        };
        if(message.includes('Arts')){
            speech.text= 'See here';
            window.location.replace("https://xemplary.netlify.app/drawing%20tutorials,%20videos");
        };
        if(message.includes('engineering')){
            speech.text= 'See here';
            window.location.replace("https://xemplary.netlify.app/drawing%20tutorials,%20videos");
        };
        if(message.includes('Engineering')){
            speech.text= 'See here';
            window.location.replace("https://xemplary.netlify.app/drawing%20tutorials,%20videos");
        };
        if(message.includes('maths')){
            speech.text= 'See here';
            window.location.replace("https://xemplary.netlify.app/animation,%20video,%20quiz");
        };
        if(message.includes('Maths')){
            speech.text= 'See here';
            window.location.replace("https://xemplary.netlify.app/animation,%20video,%20quiz");
        };
        if(message.includes('mathematics')){
            speech.text= 'See here';
            window.location.replace("https://xemplary.netlify.app/animation,%20video,%20quiz");
        };
        if(message.includes('Mathematics')){
            speech.text= 'See here';
            window.location.replace("https://xemplary.netlify.app/animation,%20video,%20quiz");
        };
        if(message.includes('book')){
            speech.text= 'See here';
            window.location.replace("https://airtable.com/embed/shrMhLpDUy1FqxMTa?backgroundColor=orange&layout=card");
        };
        if(message.includes('books')){
            speech.text= 'See here';
            window.location.replace("https://airtable.com/embed/shrMhLpDUy1FqxMTa?backgroundColor=orange&layout=card");
        };
        if(message.includes('Book')){
            speech.text= 'See here';
            window.location.replace("https://airtable.com/embed/shrMhLpDUy1FqxMTa?backgroundColor=orange&layout=card");
        };
        if(message.includes('Books')){
            speech.text= 'See here';
            window.location.replace("https://airtable.com/embed/shrMhLpDUy1FqxMTa?backgroundColor=orange&layout=card");
        };
        if(message.includes('surface')){
            speech.text= 'Curiosity found traces of organic molecules preserved in rock layers of Mars 3.5 billion years old and the amount of methane in the Martian atmosphere varies with the seasons.';
        };
        if(message.includes('Surface')){
            speech.text= 'Curiosity found traces of organic molecules preserved in rock layers of Mars 3.5 billion years old and the amount of methane in the Martian atmosphere varies with the seasons.';
        };
        if(message.includes('life')){
            speech.text= 'Curiosity found that early Mars could have supported life some time in the past. Curiosity rover has found some organic compounds on the Red Planet that could be signs of ancient Mars life, but it will take a lot more proof to verify that. Some of the powdered rock samples that Curiosity has collected over the years contain organics rich in a type of carbon on Earth is associated with life.';
        };
        if(message.includes('Life')){
            speech.text= 'Curiosity found that early Mars could have supported life some time in the past. Curiosity rover has found some organic compounds on the Red Planet that could be signs of ancient Mars life, but it will take a lot more proof to verify that. Some of the powdered rock samples that Curiosity has collected over the years contain organics rich in a type of carbon on Earth is associated with life.';
        };
        if(message.includes('mission')){
            speech.text= 'Mars Science Laboratory is a robotic space probe mission to Mars launched by NASA on November 26, 2011, which successfully landed Curiosity, a Mars rover, in Gale Crater on August 6, 2012.';
        };
        if(message.includes('Mission')){
            speech.text= 'Mars Science Laboratory is a robotic space probe mission to Mars launched by NASA on November 26, 2011, which successfully landed Curiosity, a Mars rover, in Gale Crater on August 6, 2012.';
        };
        if(message.includes('curiosity')){
            speech.text= 'Curiosity is a car-sized rover on Mars which is currently roaming the Martian landscape looking for signs of life and learning about the Red Planets unique environment. Curiosity is the largest and most capable rover ever sent to Mars.';
        };
        if(message.includes('Curiosity')){
            speech.text= 'Curiosity is a car-sized rover on Mars which is currently roaming the Martian landscape looking for signs of life and learning about the Red Planets unique environment. Curiosity is the largest and most capable rover ever sent to Mars.';
        };
        if(message.includes('rover')){
            speech.text= 'Curiosity is a car-sized rover on Mars which is currently roaming the Martian landscape looking for signs of life and learning about the Red Planets unique environment. Curiosity is the largest and most capable rover ever sent to Mars.';
        };
        if(message.includes('Rover')){
            speech.text= 'Curiosity is a car-sized rover on Mars which is currently roaming the Martian landscape looking for signs of life and learning about the Red Planets unique environment. Curiosity is the largest and most capable rover ever sent to Mars.';
        };
        if(message.includes('curiosity rover')){
            speech.text= 'Curiosity is a car-sized rover on Mars which is currently roaming the Martian landscape looking for signs of life and learning about the Red Planets unique environment. Curiosity is the largest and most capable rover ever sent to Mars.';
        };
        if(message.includes('curiosity Rover')){
            speech.text= 'Curiosity is a car-sized rover on Mars which is currently roaming the Martian landscape looking for signs of life and learning about the Red Planets unique environment. Curiosity is the largest and most capable rover ever sent to Mars.';
        };
        if(message.includes('Curiosity Rover')){
            speech.text= 'Curiosity is a car-sized rover on Mars which is currently roaming the Martian landscape looking for signs of life and learning about the Red Planets unique environment. Curiosity is the largest and most capable rover ever sent to Mars.';
        };
        if(message.includes('site')){
            speech.text= 'Our site targets the elaboration of the curiosity rover and the MSL mission through STEAM.';
        };
        if(message.includes('Site')){
            speech.text= 'Our site targets the elaboration of the curiosity rover and the MSL mission through STEAM.';
        };
        if(message.includes('website')){
            speech.text= 'Our site targets the elaboration of the curiosity rover and the MSL mission through STEAM.';
        };
        if(message.includes('Website')){
            speech.text= 'Our site targets the elaboration of the curiosity rover and the MSL mission through STEAM.';
        };
        if(message.includes('us')){
            speech.text= 'We are a passionate group of two high school students and two devoted teachers. Learn about us on the home page.';
        };
        if(message.includes('Us')){
            speech.text= 'We are a passionate group of two high school students and two devoted teachers. Learn about us on the home page.';
        };
        if(message.includes('team')){
            speech.text= 'We are a passionate group of two high school students and two devoted teachers. Learn about us on the home page.';
        };
        if(message.includes('Team')){
            speech.text= 'We are a passionate group of two high school students and two devoted teachers. Learn about us on the home page.';
        };
        if(message.includes('fact')){
            speech.text= 'Be specific. You can ask about the Martian surface, signs of life on it, and about the rover.';
        };
        if(message.includes('Fact')){
            speech.text= 'Be specific. You can ask about the Martian surface, signs of life on it, and about the rover.';
        };
        if(message.includes('Facts')){
            speech.text= 'Be specific. You can ask about the Martian surface, signs of life on it, and about the rover.';
        };
        if(message.includes('facts')){
            speech.text= 'Be specific. You can ask about the Martian surface, signs of life on it, about the rover, and more!';
        }

        speech.volume = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
        
}
        

