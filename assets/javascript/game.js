
// global variables
var target; // value of the target number that player is trying to hit
var c1, c2, c3, c4; // values of each of the crystals
var score; // current score
var winCount; // number of wins
var lossCount; // number of losses

// function to generate random integers between two positive integers, inclusive
function randBetween(i,j) {
	return Math.floor(Math.random()*(j - i + 1)) + i;
}

// function to check whether the target has been reached or exceeded
function checkStatus() {
	if (score === target) {
		winCount++;
		newGame();
	}
	else if (score > target) {
		lossCount++;
		newGame();
	}
	else {
		null;
	}
}

// function to reset the game back to initial state
function newGame() {
	score = 0;
	target = randBetween(19,120);
	c1 = randBetween(1,12);
	c2 = randBetween(1,12);
	c3 = randBetween(1,12);
	c4 = randBetween(1,12);
	updateDisplay();
}

// function to reset the game back to initial state
function resetGame() {
	winCount = 0;
	lossCount = 0;
	newGame();
}

// function to update the display with current variable values
function updateDisplay() {
	$("#target").html(target);
	$("#score").html(score);
	$("#win-count").html("Number of wins: " + winCount);
	$("#loss-count").html("Number of losses: " + lossCount);
}


// game play code
$(document).ready(function() {
	resetGame();
	updateDisplay();

	$("#crystal-1").on("click", function() {
		score += c1;
		checkStatus();
		updateDisplay();
	});

	$("#crystal-2").on("click", function() {
		score += c2;
		checkStatus();
		updateDisplay();
	});

	$("#crystal-3").on("click", function() {
		score += c3;
		checkStatus();
		updateDisplay();
	});

	$("#crystal-4").on("click", function() {
		score += c4;
		checkStatus();
		updateDisplay();
	});

	$("#reset").on("click", function() {
		resetGame();
	})
});