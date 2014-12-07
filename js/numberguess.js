function writeMessage(elementId, message, appendMessage) {
	var elemToUpdate = document.getElementById(elementId);
	if (appendMessage) {
		elemToUpdate.innerHTML = elemToUpdate.innerHTML + message;
	} else {
		elemToUpdate.innerHTML = message;
	}
};

function getNewSecretNumber() {
	return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
};

window.onload = function() {
	var secretNumber = getNewSecretNumber();
	var guessBtn = document.getElementById('buttonArea');

	guessBtn.addEventListener('click', function() {
		var userGuessed = document.getElementById('userguess').value;
		var statusArea = document.getElementById('statusArea');
		var historyList = document.getElementById('historyList');

		if (userGuessed == secretNumber) {
			// Got it
			writeMessage('statusArea', '<p>You got me I was thinking ' + secretNumber + ', let\'s go again...</p>');
			writeMessage('historyList', '<ul></ul>');
			secretNumber = getNewSecretNumber();
		} else if (userGuessed < secretNumber) {
			// User needs to guess higher
			writeMessage('statusArea', '<p>You need to guess higher than ' + userGuessed + '</p>');
			writeMessage('historyList', '<li>' + userGuessed +' (too low)</li>', true);
		} else {
			// User needs to guess lower
			writeMessage('statusArea', '<p>You need to guess lower than ' + userGuessed + '</p>');
			writeMessage('historyList', '<li>' + userGuessed + ' (too high)</li>', true);
		}

		document.getElementById('userguess').value = '';
	});
};