var gameChoises = ["rock", "paper", "scissors"];
var userChoise, computerChoise;
document.querySelector(".user.rock").addEventListener("click", user_rock_click);
document.querySelector(".user.paper").addEventListener("click", user_paper_click);
document.querySelector(".user.scissors").addEventListener("click", user_scissors_click);
document.querySelector("td.play-again").addEventListener("click", playAgain);

function user_rock_click() {
	userChoise = gameChoises[0];
	play();
}
function user_paper_click() {
	userChoise = gameChoises[1];
	play();
}
function user_scissors_click() {
	userChoise = gameChoises[2];
	play();
}

function getRandomChoise() {
	return gameChoises[(Math.random()*2).toFixed()];
}

function play() {
	computerChoise = getRandomChoise();
	document.querySelector(".user." + userChoise).style.background = "DodgerBlue";
	document.querySelector(".computer." + computerChoise).style.background = "DodgerBlue";
	var winner = getWinner(userChoise, computerChoise);

	if (winner == "user") {
		document.querySelector("th.user").style.background = "LightGreen";
		document.querySelector("th.computer").style.background = "Tomato";
		setTimeout(function () {
			alert("Выиграл пользователь!");
		}, 10);
	}
	if (winner == "computer") {
		document.querySelector("th.user").style.background = "Tomato";
		document.querySelector("th.computer").style.background = "LightGreen";
		setTimeout(function () {
			alert("Выиграл компьютер!");
		}, 10);
	}
	if (winner == "draw") {
		setTimeout(function () {
			alert("Ничья!");
		}, 10);
	}
	
}

function getWinner(userChoise, computerChoise) {
	switch(userChoise) {
		case "rock":
			switch(computerChoise) {
				case "rock":
					return "draw";
					break;
				case "paper":
					return "computer";
					break;
				case "scissors":
					return "user";
					break;
			}
			break;
		case "paper":
			switch(computerChoise) {
				case "rock":
					return "user";
					break;
				case "paper":
					return "draw";
					break;
				case "scissors":
					return "computer";
					break;
			}
			break;
		case "scissors":
			switch(computerChoise) {
				case "rock":
					return "computer";
					break;
				case "paper":
					return "user";
					break;
				case "scissors":
					return "draw";
					break;
			}
			break;
	}
}

function playAgain() {
	var elements = document.querySelectorAll(".user, .computer");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = "rgba(0,0,0,0)";
    }
}