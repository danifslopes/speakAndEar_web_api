let voice;
const pitch = 1.6;//quao grave ou aguda e a voz | min="0" max="2" ---- 0.8inicial
const rate = 0.9; //velocidade que fala | min="0.5" max="2" ----- 0.9inicial
let isSpeaking =  false;
let afterSpeaking = function (r) {}
function speak(txt) {
    isSpeaking = true;
    const utterThis = new SpeechSynthesisUtterance(txt);
    utterThis.voice = voice;
    utterThis.pitch = pitch;
    utterThis.rate = rate;
    utterThis.lang = "pt-PT";

    window.speechSynthesis.speak(utterThis);
    utterThis.onend = (e) => {
        isSpeaking = false;
        afterSpeaking(txt);
    }
    utterThis.onpause = (event) => {
        const char = event.utterance.text.charAt(event.charIndex);
        console.log(`Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`);
    };
}
speechSynthesis.onvoiceschanged = function() {
    console.log("voices updated")
    const allVoices = window.speechSynthesis.getVoices().filter(r=>r.lang === "pt-PT"); //linguagem
    voice = allVoices[0]; //qual a voz que queremos
    if (!voice) console.error("No voice was selected");
}

