export default class Game {
  constructor() {
    this.options = ['rock', 'paper', 'scissors'];
    this.score = {
      player: 0,
      computer: 0,
    };
    this.player = null;
    this.computer = null;
    this.message = null;
  }

  setPlayerChoice(choice) {
    this.player = choice;
  }

  play() {
    this.computer =
      this.options[Math.floor(Math.random() * this.options.length)];

    if (this.player === this.computer) {
      this.message = 'TIE';
    } else if (
      (this.player === 'rock' && this.computer === 'scissors') ||
      (this.player === 'paper' && this.computer === 'rock') ||
      (this.player === 'scissors' && this.computer === 'paper')
    ) {
      this.score.player += 1;
      this.message = 'YOU WIN';
    } else {
      this.score.computer += 1;
      this.message = 'YOU LOSE';
    }
  }
}
