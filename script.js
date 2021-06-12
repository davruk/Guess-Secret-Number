let resultInfo = document.getElementById("resultInfo");
let secret = Math.floor(Math.random() * 100) + 1;

function guessSecretNumber() {
    let guessInput = parseInt(document.getElementById("guess").value);

    if(guessInput === secret) {
        resultInfo.textContent = " YOU GOT IT! " + secret + " is the secret number! Refresh the site to start a new game?";
    } else if(guessInput > secret) {
        resultInfo.textContent = "Too high! Try lower";
    } else if(guessInput < secret) {
        resultInfo.textContent = "Too low! Try higher";
    }
}
