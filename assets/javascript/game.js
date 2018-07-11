// make sure JS doesn't run until the HTML has finished loading
$(document).ready(function() {
    // ---------- GLOBAL VARIABLES ----------
        // how many guesses user gets
        var guessesLeft = 15;
        // num of wins and loses
        var winCounter = 0;
        var lossCounter = 0;
        // letters guessed so far
        var guessesSoFar = [];
        // computer random letter choices
        var randLetterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // ---------- END GLOBAL VARIABLES ----------

    // ---------- FUNCTIONS ----------
        // start capturing
        document.onkeypress = function(event) {
            // capture computers' choice
            var computerLetterChoice = randLetterChoice[Math.floor(Math.random() * randLetterChoice.length)];
            // capture user guess
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            // display users' guesses
            guessesSoFar.push(userGuess);
            console.log(guessesSoFar);
            
            // compare computer choice to user guess, see if they match, winner, reset
            if (userGuess == computerLetterChoice) {
                winCounter++;
                alert("You Won!");
                guessesLeft = 15;
                guessesSoFar.length = 0;
            }
            // no guesses left, loser, reset
            else if (guessesLeft == 0) {
                lossCounter++;
                alert("You ran out of guesses. You lose.");
                guessesLeft = 15;
                guessesSoFar.length = 0;
            }
            // subtract number of guesses left during game play
            else if (userGuess !== computerLetterChoice) {
                guessesLeft--;
            }

            // display results in html
            document.getElementById("wins").innerHTML = winCounter;
            document.getElementById("loses").innerHTML = lossCounter;
            document.getElementById("guessLeft").innerHTML = guessesLeft;
            document.getElementById("guessSoFar").innerHTML = guessesSoFar;
        };
    // ---------- END FUNCTIONS ----------
});