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
	document.onkeyup = function(event) {

//	capture computers choice
	var compLetterChoice = randLetterChoice[Math.floor(Math.random() * randLetterChoice.length)];

//	capture users guess
	var userGuess = String.fromCharccode(event.keyCode).toLowerCase();

//	display user guesses
	guessesSoFar.push(userGuess);

//	compare computers choice to users guess and see if they match or not, winner, reset
	if (userGuess == compLetterChoice) {
		wins++;
		alert('You Won!');
		guessesLeft = 15;
		guessesSoFar.lenth = 0;
	}

//	no guesses left
	else if (guessesLeft == 0) {
		
	}


//	compare computers choice to users guess and see if they match or not, loser

//	determine a win or a loss


//	display the result (win,loss)


//	display letters guessed thus far


//	display win or lose when number of guesses has been reached


		};

	});