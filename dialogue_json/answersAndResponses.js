let currentState = "state0";
let currentResponse = "";
let answersAndResponses = {
    state0: {
        "###": { //### é qualquer coisa que o user diga
            speak: ["Olá! Queres continuar? sim ou não?", "Saudações! Queres continuar com isto? sim ou não?"], //ele escolhe uma random
            nextState: "state1", //para que estado saltar a seguir
            repeat: ["Então, sim ou não?", "sim, ou não? Vá lá... sim ou não?"] //ele escolhe uma random se estiver a demorar
        }
    },
    state1: {
        "sim": {
            speak: ["boa, o que achas de robôs?", "porreiro pah! o que é que tu achas de robôs?"],
            nextState: "state2",
            repeat: ["Então, o que achas de robots?"]
        },
        get quero() {return this.sim}, //significa que o "quero" passa a ser igual ao "sim"
        get bota() {return this.sim},  //significa que o "bota" passa a ser igual ao "sim"
        get bora() {return this.sim}, //significa que o "bora" passa a ser igual ao "sim"
        "não": {
            speak: "então rua, sai",
        },
        "###": {
            speak: ["olha... o que achas de robôs?"],
            nextState: "state2",
            repeat: ["Diz lá, o que achas de robôs?", "Então? Tens medo que mim? Responde-me!"]
        }
    },
    state2: {
        "###": {
            speak: ["Pois... Os robots são fixes. tu não."]
        }
    }
}

let randomArrayItem = function(arr) {
    return arr[Math.round(Math.random() * (arr.length-1)) ]
}



