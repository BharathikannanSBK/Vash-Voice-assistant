var shadow = document.getElementsByClassName('reactor-container');
function gettext()
{
    recognition.start();
}
function speak(text)
{
    const text_speak = new SpeechSynthesisUtterance(text);
   // const voices = speechSynthesis.getVoices();
    text_speak.rate = 1;
    text_speak.volume =2;
    text_speak.pitch = 1;
    //text_speak.voice = voices[3];
    window.speechSynthesis.speak(text_speak);
    console.log(text_speak);
}
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onresult = (event)=>
{
    const currentIndex = event.resultIndex;
    const transcript=event.results[currentIndex][0].transcript;
    const message = transcript.toLowerCase()
    if(message==='tell my name' || message==='who am i')
    speak('SBK The Mechanic Sir');
    else if(message.includes('tell my date of birth')|| message.includes('date of birth'))
    speak('17 February 2003 Sir');
    else if(message.includes('hey are you there'))
    speak('I am here for u Sir')
    else if(message.includes('open'))
    {
        let words = message.split(" ");
        let w1 = words[words.length - 1];
        speak('Opening '+w1+' SIR');
        window.open('https://'+ w1 +'.com','_blank')
    }
    else if(message.includes('search for ') && message.includes('in'))
    {
        let words = message.split(" ");
        let w1 = words[words.length - 3];
        let w2 = words[words.length - 1];
        speak('searching '+w1+' in '+w2+' SIR');
        window.open('https://www.'+w2+'.com/search?q='+w1,'_blank');
    }
    else if(message.includes('calculate'))
    {
        let words = message.split("");
        console.log(words);
        words.splice(0,9);
        console.log(words);
        words=words.join("");
        let value = eval(words);
        speak(value+' SIR');
    }
    else if(message.includes('who are you') || message.includes('tell about you'))
    {
        speak('I AM VASH. A VOICE ASSISTANT . DEVELOPED BY SBK THE MECHANIC SIR')
    }
    else if(message.includes('hello'))
    {
        speak('hi varunika')
    }
    else
    speak('make me more intelligent');
}
