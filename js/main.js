//console.log("Up and running!");


var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var checkForMatch = function()
	{
		if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		} else {
		console.log("Sorry, try again.");
		}
	}

var flipCard = function(cardId)
	{
		checkForMatch()
		console.log("user flipped " + cards[cardId])
		cardsInPlay.push(cards[cardId])

		if (cardsInPlay.length === 2) 
			{ 
				checkForMatch()	
			}

	}
	flipCard(0)
	flipCard(2)


/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo); */