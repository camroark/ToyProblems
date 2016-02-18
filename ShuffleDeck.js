/*Given an array containing a deck of cards, implement a function that shuffles
the deck. */


var shuffleDeck = function(deck) {
  var l = deck.length;
  while(l >= 0) {
    var r = Math.floor(Math.random() * l);
    var p = deck.splice(r, 1);
    deck.push(p[0]);
    l--;
  }
  return deck;
};
