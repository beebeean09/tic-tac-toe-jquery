const MoveError = require('../../solution/moveError.js');

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.$el.append(this.setupBoard());
  }

  bindEvents() {
    $('li').on('click', e => {
      let $e = $(e.currentTarget);
      try {
        if (!($e.attr('class') === 'white')) {
          this.makeMove($e);
        }
        this.game.playMove($e.data('pos'));
      } catch (error) {
        alert(error.msg);
      }

    });
  }

  makeMove($square) {
    $square.addClass('white');
    $square.text(this.game.currentPlayer);

    if (this.game.currentPlayer === 'x') {
      $square.css("color", "blue");
    } else {
      $square.css('color', 'purple');
    }
  }

  setupBoard() {
    let $ul = $('<ul/>');
    let x = 0;
    let y = 0;
    for (let i = 0; i < 9; i++) {
      let $li = $('<li/>');
      if (y === 3) {
        x++;
        y = 0;
      }
      $li.data('pos', [x, y]);
      $ul.append($li);
      y++;
    }

    return $ul;
  }
}

module.exports = View;
