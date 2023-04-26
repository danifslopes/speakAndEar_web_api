var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
//var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
//const grammar = "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
//speechRecognitionList.addFromString(grammar, 1);
//recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
let afterListening =  function (r) {};

recognition.onresult = function (event) {
    console.log("(result)");
    let r = event.results[0][0].transcript;
    afterListening(r);
};
recognition.onerror = function (event) {
    console.log(event.error);
}
recognition.onend = function () {
    console.log("(end)");
}
recognition.onaudioend = function () {
    console.log('(audio ended)');
}