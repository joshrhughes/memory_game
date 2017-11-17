//console.log("Up and running!");


var cards = [

	{
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png",
   },
   {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png",
   },

   {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
   },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
   },

];
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
	{	console.log(cards[cardId].cardImage);			//Not sure if this is the right spot
		console.log(cards[cardId].suit);
		checkForMatch()
		console.log("user flipped " + cards[cardId].rank)
		cardsInPlay.push(cards[cardId].rank)

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