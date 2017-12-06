//	make sure Javascript doesn't run until the HTML is finished loading
	$(document).ready(function() {

//	determine how many guesses user gets
	var guessesLeft = 15;

// 	track number of wins, losses, and guesses so far
	var winCounter = 0;
	var lossCounter = 0;
	var guessesSoFar = [];

//  computer random letter choices
	var randLetterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//	start capturing
	document.onkeypress = function(event) {

//	capture computers choice
	var compLetterChoice = randLetterChoice[Math.floor(Math.random() * randLetterChoice.length)];

//	capture users guess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//	display user guesses
	guessesSoFar.push(userGuess);

	console.log(guessesSoFar);

//	compare computers choice to users guess and see if they match or not, winner, reset
	if (userGuess == compLetterChoice) {
		winCounter++;
		alert('You Won!');
		guessesLeft = 15;
		guessesSoFar.length = 0;
	}

//	no guesses left
	else if (guessesLeft == 0) {
		lossCounter++;
		alert('You ran out of guesses. You lose.')
		guessesLeft = 15;
		guessesSoFar.length = 0;
	}

// 	lower number of guesses left
	else if (userGuess !== compLetterChoice) {
		guessesLeft--;
	}

// 	display results in html
	document.getElementById("wins").innerHTML = winCounter;
	document.getElementById("loses").innerHTML = lossCounter;
	document.getElementById("guessLeft").innerHTML = guessesLeft;
	document.getElementById("guessSoFar").innerHTML = guessesSoFar;

//	compare computers choice to users guess and see if they match or not, loser
//	determine a win or a loss
//	display the result (win,loss)
//	display letters guessed thus far
//	display win or lose when number of guesses has been reached


		};

	});