/* eslint-disable class-methods-use-this */
export default class UI {
  loadUI(game) {
    UI.preStep(game.player);

    setTimeout(() => {
      UI.postGame(game.player, game.computer, game.message, game.score.player);
    }, 1500);
  }

  static preStep(player) {
    const game = document.querySelector('.game');

    if (game && game.firstChild) {
      game.classList.remove('game');
      game.classList.add('game--post-choice');
      while (game.firstChild) {
        game.removeChild(game.firstChild);
      }
      game.innerHTML = `
        <div class="game__player-choice">
        <div class="game__button-wrap game__button-wrap--${player} ${player}">
            <div class="game__button ${player}">
            <img src="./assets/images/icon-${player}.svg" alt="${player}">
            </div>
        </div>
        <p class="game__player-desc">YOU PICKED</p>
        </div>

        <div class="game__house-choice">
        <div class="game__button-wrap game__button-wrap--empty">
            <div class="game__button game__button--empty">
            </div>
        </div>
        <p class="game__house-desc">THE HOUSE PICKED</p>
        </div>
      `;
      const gameStatus = document.createElement('div');
      gameStatus.classList.add('game-status');

      game.insertAdjacentElement('afterend', gameStatus);
    }
  }

  static postGame(player, computer, message, score) {
    const game = document.querySelector('.game--post-choice');
    while (game.firstChild) {
      game.removeChild(game.lastChild);
    }

    game.innerHTML = `
        <div class="game__player-choice">
        <div class="game__button-wrap game__button-wrap--${player} ${player} game__button-wrap--highlight">
            <div class="game__button ${player}">
            <img src="./assets/images/icon-${player}.svg" alt="${player}">
            </div>
        </div>
        <p class="game__player-desc">YOU PICKED</p>
        </div>

        <div class="game__house-choice">
        <div class="game__button-wrap game__button-wrap--${computer} ${computer}">
            <div class="game__button ${computer}">
            <img src="./assets/images/icon-${computer}.svg" alt="${computer}">
            </div>
        </div>
        <p class="game__house-desc">THE HOUSE PICKED</p>
        </div>
    `;

    const gameStatus = document.querySelector('.game-status');

    gameStatus.innerHTML = `
        <p class="game-status__message">${message}</p>
        <button class="btn-primary" type="button" id="restart">PLAY AGAIN</button>
    `;

    const restartBtn = document.getElementById('restart');
    restartBtn.addEventListener('click', () => {
      UI.restart();
    });
    UI.updateScore(score);
  }

  static updateScore(score) {
    const scoreCard = document.querySelector('.score-card__number');
    scoreCard.textContent = score;
  }

  static restart() {
    const game = document.querySelector('.game--post-choice');
    while (game.firstChild) {
      game.removeChild(game.lastChild);
    }
    game.classList.remove('game--post-choice');
    game.classList.add('game');
    game.innerHTML = `
        <div class="game__button-wrap game__button-wrap--rock rock" data-choice="rock">
            <div class="game__button rock" data-choice="rock">
            <img src="./assets/images/icon-rock.svg" alt="rock">
            </div>
        </div>
        <div class="game__button-wrap game__button-wrap--paper paper" data-choice="paper">
            <div class="game__button paper" data-choice="paper">
            <img src="./assets/images/icon-paper.svg" alt="paper">
            </div>
        </div>
        <div class="game__button-wrap game__button-wrap--scissors scissors" data-choice="scissors">
            <div class="game__button scissors" data-choice="scissors">
            <img src="./assets/images/icon-scissors.svg" alt="scissors">
            </div>
        </div>
    `;
    const gameStatus = document.querySelector('.game-status');
    const main = document.querySelector('main');
    main.removeChild(gameStatus);
  }
}
