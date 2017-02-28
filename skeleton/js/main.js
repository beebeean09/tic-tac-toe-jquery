const View = require('./ttt-view.js');
const Game = require('../../solution/game.js');

$( () => {
  let newGame = new Game();
  let displayGrid = $("figure.ttt");
  let newView = new View(newGame, displayGrid);
  newView.bindEvents();

  setInterval(() => {
    if (newGame.isOver()) {
      alert(`Congrats ${newGame.winner()}!`);
    }
  }, 1000);
});
