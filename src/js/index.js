import Modal from './modules/modal';
import Game from './modules/game';
import UI from './modules/ui';

// MODAL
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

const rulesModal = new Modal('rules-modal');
openModalBtn.addEventListener('click', () => {
  rulesModal.open();
});
closeModalBtn.addEventListener('click', () => {
  rulesModal.close();
});

// GAME LOGIC
const session = new Game();
const ui = new UI();
const rock = document.querySelector('[data-choice="rock"]');
const paper = document.querySelector('[data-choice="paper"]');
const scissors = document.querySelector('[data-choice="scissors"]');

function doRound(choice) {
  session.setPlayerChoice(choice);
  session.play();
  ui.loadUI(session);
}

rock.addEventListener('click', () => {
  doRound('rock');
});
paper.addEventListener('click', () => {
  doRound('paper');
});
scissors.addEventListener('click', () => {
  doRound('scissors');
});

const observer = new MutationObserver(() => {
  if (document.querySelector('[data-choice="rock"]')) {
    const newRock = document.querySelector('[data-choice="rock"]');
    const newPaper = document.querySelector('[data-choice="paper"]');
    const newScissors = document.querySelector('[data-choice="scissors"]');
    newRock.addEventListener('click', () => {
      doRound('rock');
    });
    newPaper.addEventListener('click', () => {
      doRound('paper');
    });
    newScissors.addEventListener('click', () => {
      doRound('scissors');
    });
  }
});

const config = {
  childList: true,
  subtree: true,
};

observer.observe(document.body, config);
