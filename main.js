var cards = ["queen", "queen," "king", "king"];
var cardsInPlay = [];

// if (cardTwo === cardFour) {
// 	alert ("Sorry, try again.");
// } else if (cardTwo === cardThree) {
// 	alert ("Sorry, try again.");
// } else if (cardOne === cardFour) {
// 	alert ("Sorry, try again.");
// } else if (cardOne === cardThree) {
// 	alert ("Sorry, try again.");
// } else {
// 	alert ("You found a match!");
// }

var gameBoard = document.getElementyById('game-board');

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = []];
	}
}

var createCards = function() {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendchild(cardElement);
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	}
} 

createCards();