# speakAndListen_web_api
The system needs to be started with a user action, such as a click.

To make the system to speak, just use speak("your text here");
The function "afterSpeaking" is called  after the system has finished speaking

To make the system listen just call recognition.start();
The function "afterListening" is called  after the system has finished listening

------------------------------------
BASIC EXAMPLE: (refer to basic/index.html)

//need to use a user action to start
window.onclick = function () {
  speak("Hello! How are you?");
}

//runs after the system has finished speaking
afterSpeaking = function (txtSaid) {
  recognition.start();
}

//runs after the system has finished listening
//not stopping speech recognition before speaking will make it hear itself. That's why we do "recognition.stop()"
afterListening = function (txtRecognised) {
  recognition.stop();
  speak(txtRecognised);
}

------------------------------------
DIALOG JSON EXAMPLE: (refer to dialogue_json/index.html)

Use the file answersAndResponses.js to structure the dialogue.
Click on the screen to start

