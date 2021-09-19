/* Xuan Nghiem Javascript Week 7 lab 4/4/2021 */

// randomly selects 4 numbers between 1-6, representing 4 dies.
// displays who rolled the higher value, if values are the same,
// if values are doubles because of matching die values, or
// displays the winner if points reaches greater or higher than 100
function rollDice() {
	var status = document.getElementById("status");
	status.innerHTML = '';
	var die1 = document.getElementById("die1");
	var die2 = document.getElementById("die2");
	var die3 = document.getElementById("die3");
	var die4 = document.getElementById("die4");
	var d1 = Math.floor(Math.random()*6) + 1;
	var d2 = Math.floor(Math.random()*6) + 1;
	var d3 = Math.floor(Math.random()*6) + 1;
	var d4 = Math.floor(Math.random()*6) + 1;

	die1.innerHTML = d1;
	die2.innerHTML = d2;
	die3.innerHTML = d3;
	die4.innerHTML = d4;

	var pSum = d1 + d2;
	var sSum = d3 + d4;

	var playerSum = document.getElementById("playerSum");
	var systemSum = document.getElementById("systemSum");

	playerSum.innerHTML = pSum;
	systemSum.innerHTML = sSum;

	var pSummary = document.getElementById("summary");
	if(pSum == sSum){
		pSummary.innerHTML = 'No one gets a point';
	} else if(pSum > sSum){
		if(d1 == d2){
			pSum *= 2;
		}
		pSummary.innerHTML = 'You won ' + pSum + ' points';
		var playerScore = document.getElementById("playerScore");
		playerScore.innerHTML = Number(playerScore.innerHTML) + pSum;
	} else if(pSum < sSum){
		if(d3 == d4){
			sSum *= 2;
		}
		pSummary.innerHTML = 'The system won ' + sSum + ' points';
		var systemScore = document.getElementById("systemScore");
		systemScore.innerHTML = Number(systemScore.innerHTML) + sSum;
	}

	var playerScore = document.getElementById("playerScore");
	var systemScore = document.getElementById("systemScore");

	if(Number(playerScore.innerHTML) >= 100
			|| Number(systemScore.innerHTML) >= 100){
		endGame();
	}
}

// ends game, announces the winner, the person with the higher score,
// and resets all score values and msgs to 0 and empty. Restarts game.
function endGame(){
	var status = document.getElementById("status");
	var playerSum = document.getElementById("playerScore");
	var systemSum = document.getElementById("systemScore");

	var playerScore = Number(playerSum.innerHTML);
	var systemScore = Number(systemSum.innerHTML);

	if(playerScore == systemScore){
		status.innerHTML = 'No one wins.';
	} else if(playerScore > systemScore){
		status.innerHTML = 'You win with ' + playerScore + ' points';
	} else if(playerScore < systemScore){
		status.innerHTML = 'The system wins with ' + systemScore + ' points';
	}

	var die1 = document.getElementById("die1");
	var die2 = document.getElementById("die2");
	var die3 = document.getElementById("die3");
	var die4 = document.getElementById("die4");
	var pSum = document.getElementById("playerSum");
	var sSum = document.getElementById("systemSum");
	var summary = document.getElementById("summary");

	die1.innerHTML = 0;
	die2.innerHTML = 0;
	die3.innerHTML = 0;
	die4.innerHTML = 0;
	pSum.innerHTML = 0;
	sSum.innerHTML = 0;
	playerSum.innerHTML = 0;
	systemSum.innerHTML = 0;
	summary.innerHTML = '';
}
