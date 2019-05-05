function makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789.,';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function checkIfCorrect(userInput, realAnswer) {
    console.log("user: " + userInput +"\n"+"real: " + realAnswer)
    if(userInput == realAnswer) {
        console.log("yes!")
        window.location.assign("hw2_q2.html");
    }
    else {
        console.log("no!")
    }
}
