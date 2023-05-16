var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = "pt-PT";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

let isStarted = false;
let timeStarted = 0;//in  seconds
let timeSinceStarted = 0;//in  seconds
let userSpeaking = false;
let timeUserStartedSpeaking = 0; //in  seconds
let timeSinceUserStartedSpeaking = 0; //in  seconds
let waitingUserSpeech = false;
let timeWaitingForSpeech =  0;

let afterListening = function (r) {
};
let startedHearingSomething = function () {
};
let heardNothingForALong = function () {
};
let forEveryCount = function (counter) {

}

let countTime = function () {
    setTimeout(function () {
        let currentTime = Math.floor(Date.now() / 1000);
        if (isStarted) timeSinceStarted = currentTime - timeStarted;
        if (userSpeaking) timeSinceUserStartedSpeaking = currentTime - timeUserStartedSpeaking;
        if(waitingUserSpeech) timeWaitingForSpeech = currentTime - timeStarted;
        forEveryCount(timeSinceStarted, timeSinceUserStartedSpeaking, timeWaitingForSpeech);
        countTime();
    }, 500);
}
countTime();

recognition.onstart = function () {
    console.log("(onstart)");
    timeStarted  = Math.floor(Date.now() / 1000);

    isStarted = true;
    waitingUserSpeech = true;

    timeSinceStarted = 0;
    timeSinceUserStartedSpeaking = 0;
    timeWaitingForSpeech = 0;

}
recognition.onerror = function (event) {
    console.log(event.error);
    heardNothingForALong();
}
recognition.onresult = function (event) {
    let r = event.results[0][0].transcript;
    console.log(r);
    afterListening(r);
};
recognition.onend = function () {
    console.log("(end)");
    isStarted = false;
    if (!isSpeaking) recognition.start();
}

recognition.onspeechstart = () => {
    console.log('(onspeechstart)');
    timeUserStartedSpeaking = Math.floor(Date.now() / 1000);
    waitingUserSpeech = false
    userSpeaking = true;
    startedHearingSomething()
};
recognition.onspeechend = function () {
    console.log('(onspeechend)');
    userSpeaking = false;
}
recognition.onaudiostart = function () {
    console.log('(onaudiostart)');
}
recognition.onaudioend = function () {
    console.log('(onaudioend)');
}