
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var countdown = 9;
var Guessed = [];

document.onkeyup = function (event) {

    var letter = String.fromCharCode(event.which).toLowerCase();


    var userGuess = event.key;
    
    Guessed.push(userGuess);
    console.log(Guessed)
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === letter) {
        
        if (userGuess === computerGuess) {
            wins++;
            Guessed = [];
            countdown = 9;
            alert("I'm So Proud of You!");

        }
        else {
            countdown--;
        }


        if (countdown === 0) {
            {
                losses++;
                countdown = 9;
                Guessed = [];
            }

            if (losses = + 1) {
                alert("You loss buddy");


            }
        }

        var html =
            "<p>Wins: " + wins + "<p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Remaining: " + countdown + "</p>" +
            "<p>Letters Guessed: " + Guessed + "</p>";

        document.querySelector("#game").innerHTML = html;
    }
}
