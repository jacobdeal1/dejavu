let correct = Math.floor(Math.random() * 100) + 1;
let play = true;

while (play) {
    let guess = parseInt(prompt("Guess a number between 1 and 100:"));
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Choose a number between 1 and 100 please:");
    } else {
        if (guess > correct) {
            alert("Choose a lower number:");
        } else if (guess < correct) {
            alert("Choose a higher number:");
        } else {
            play = false;
            alert("Congrats you guessed correctly");
        }
    }
}
