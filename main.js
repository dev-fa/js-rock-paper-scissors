/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/js/modules/modal.js\");\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game */ \"./src/js/modules/game.js\");\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui */ \"./src/js/modules/ui.js\");\n\n\n\n\n// MODAL\nconst openModalBtn = document.getElementById('open-modal');\nconst closeModalBtn = document.getElementById('close-modal');\n\nconst rulesModal = new _modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('rules-modal');\nopenModalBtn.addEventListener('click', () => {\n  rulesModal.open();\n});\ncloseModalBtn.addEventListener('click', () => {\n  rulesModal.close();\n});\nwindow.addEventListener('click', (e) => {\n  rulesModal.outsideClick(e);\n});\n\n// GAME LOGIC\nconst session = new _modules_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst ui = new _modules_ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst rock = document.querySelector('[data-choice=\"rock\"]');\nconst paper = document.querySelector('[data-choice=\"paper\"]');\nconst scissors = document.querySelector('[data-choice=\"scissors\"]');\n\nfunction doRound(choice) {\n  session.setPlayerChoice(choice);\n  session.play();\n  ui.loadUI(session);\n}\n\nrock.addEventListener('click', () => {\n  doRound('rock');\n});\npaper.addEventListener('click', () => {\n  doRound('paper');\n});\nscissors.addEventListener('click', () => {\n  doRound('scissors');\n});\n\nconst observer = new MutationObserver(() => {\n  if (document.querySelector('[data-choice=\"rock\"]')) {\n    const newRock = document.querySelector('[data-choice=\"rock\"]');\n    const newPaper = document.querySelector('[data-choice=\"paper\"]');\n    const newScissors = document.querySelector('[data-choice=\"scissors\"]');\n    newRock.addEventListener('click', () => {\n      doRound('rock');\n    });\n    newPaper.addEventListener('click', () => {\n      doRound('paper');\n    });\n    newScissors.addEventListener('click', () => {\n      doRound('scissors');\n    });\n  }\n});\n\nconst config = {\n  childList: true,\n  subtree: true,\n};\n\nobserver.observe(document.body, config);\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/game.js":
/*!********************************!*\
  !*** ./src/js/modules/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\nclass Game {\n  constructor() {\n    this.options = ['rock', 'paper', 'scissors'];\n    this.score = {\n      player: 0,\n      computer: 0,\n    };\n    this.player = null;\n    this.computer = null;\n    this.message = null;\n  }\n\n  setPlayerChoice(choice) {\n    this.player = choice;\n  }\n\n  play() {\n    this.computer =\n      this.options[Math.floor(Math.random() * this.options.length)];\n\n    if (this.player === this.computer) {\n      this.message = 'TIE';\n    } else if (\n      (this.player === 'rock' && this.computer === 'scissors') ||\n      (this.player === 'paper' && this.computer === 'rock') ||\n      (this.player === 'scissors' && this.computer === 'paper')\n    ) {\n      this.score.player += 1;\n      this.message = 'YOU WIN';\n    } else {\n      this.score.computer += 1;\n      this.message = 'YOU LOSE';\n    }\n  }\n}\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/js/modules/game.js?");

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(id) {\n    this.id = id;\n    this.element = document.getElementById(this.id);\n  }\n\n  open() {\n    this.element.showModal();\n  }\n\n  close() {\n    this.element.close();\n  }\n\n  outsideClick(e) {\n    if (e.target === this.element) {\n      this.element.close();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/ui.js":
/*!******************************!*\
  !*** ./src/js/modules/ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* eslint-disable class-methods-use-this */\nclass UI {\n  loadUI(game) {\n    UI.preStep(game.player);\n\n    setTimeout(() => {\n      UI.postGame(game.player, game.computer, game.message, game.score.player);\n    }, 1500);\n  }\n\n  static preStep(player) {\n    const game = document.querySelector('.game');\n\n    if (game && game.firstChild) {\n      game.classList.remove('game');\n      game.classList.add('game--post-choice');\n      while (game.firstChild) {\n        game.removeChild(game.firstChild);\n      }\n      game.innerHTML = `\n        <div class=\"game__player-choice\">\n        <div class=\"game__button-wrap game__button-wrap--${player} ${player}\">\n            <div class=\"game__button ${player}\">\n            <img src=\"./assets/images/icon-${player}.svg\" alt=\"${player}\">\n            </div>\n        </div>\n        <p class=\"game__player-desc\">YOU PICKED</p>\n        </div>\n\n        <div class=\"game__house-choice\">\n        <div class=\"game__button-wrap game__button-wrap--empty\">\n            <div class=\"game__button game__button--empty\">\n            </div>\n        </div>\n        <p class=\"game__house-desc\">THE HOUSE PICKED</p>\n        </div>\n      `;\n      const gameStatus = document.createElement('div');\n      gameStatus.classList.add('game-status');\n\n      game.insertAdjacentElement('afterend', gameStatus);\n    }\n  }\n\n  static postGame(player, computer, message, score) {\n    const game = document.querySelector('.game--post-choice');\n    while (game.firstChild) {\n      game.removeChild(game.lastChild);\n    }\n\n    game.innerHTML = `\n        <div class=\"game__player-choice\">\n        <div class=\"game__button-wrap game__button-wrap--${player} ${player} game__button-wrap--highlight\">\n            <div class=\"game__button ${player}\">\n            <img src=\"./assets/images/icon-${player}.svg\" alt=\"${player}\">\n            </div>\n        </div>\n        <p class=\"game__player-desc\">YOU PICKED</p>\n        </div>\n\n        <div class=\"game__house-choice\">\n        <div class=\"game__button-wrap game__button-wrap--${computer} ${computer}\">\n            <div class=\"game__button ${computer}\">\n            <img src=\"./assets/images/icon-${computer}.svg\" alt=\"${computer}\">\n            </div>\n        </div>\n        <p class=\"game__house-desc\">THE HOUSE PICKED</p>\n        </div>\n    `;\n\n    const gameStatus = document.querySelector('.game-status');\n\n    gameStatus.innerHTML = `\n        <p class=\"game-status__message\">${message}</p>\n        <button class=\"btn-primary\" type=\"button\" id=\"restart\">PLAY AGAIN</button>\n    `;\n\n    const restartBtn = document.getElementById('restart');\n    restartBtn.addEventListener('click', () => {\n      UI.restart();\n    });\n    UI.updateScore(score);\n  }\n\n  static updateScore(score) {\n    const scoreCard = document.querySelector('.score-card__number');\n    scoreCard.textContent = score;\n  }\n\n  static restart() {\n    const game = document.querySelector('.game--post-choice');\n    while (game.firstChild) {\n      game.removeChild(game.lastChild);\n    }\n    game.classList.remove('game--post-choice');\n    game.classList.add('game');\n    game.innerHTML = `\n        <div class=\"game__button-wrap game__button-wrap--rock rock\" data-choice=\"rock\">\n            <div class=\"game__button rock\" data-choice=\"rock\">\n            <img src=\"./assets/images/icon-rock.svg\" alt=\"rock\">\n            </div>\n        </div>\n        <div class=\"game__button-wrap game__button-wrap--paper paper\" data-choice=\"paper\">\n            <div class=\"game__button paper\" data-choice=\"paper\">\n            <img src=\"./assets/images/icon-paper.svg\" alt=\"paper\">\n            </div>\n        </div>\n        <div class=\"game__button-wrap game__button-wrap--scissors scissors\" data-choice=\"scissors\">\n            <div class=\"game__button scissors\" data-choice=\"scissors\">\n            <img src=\"./assets/images/icon-scissors.svg\" alt=\"scissors\">\n            </div>\n        </div>\n    `;\n    const gameStatus = document.querySelector('.game-status');\n    const main = document.querySelector('main');\n    main.removeChild(gameStatus);\n  }\n}\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/js/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;