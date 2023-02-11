import * as Modal from './modules/modal';

const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', Modal.openModal);
closeModalBtn.addEventListener('click', Modal.closeModal);
