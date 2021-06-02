import { addTransaction, init } from './transactions';

const form = document.querySelector('#form');

init();

form.addEventListener('submit', addTransaction);
