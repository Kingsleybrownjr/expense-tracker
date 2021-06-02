import { v4 as uuidv4 } from 'uuid';
import { renderPage } from './views/renderPage';

renderPage();

const textInput = document.querySelector('#text');
const amountInput = document.querySelector('#amount');
const balance = document.querySelector('#balance');
const moneyPlus = document.querySelector('#money-plus');
const moneyMinus = document.querySelector('#money-minus');
const list = document.querySelector('#list');

const localStorageTransactions = JSON.parse(
	localStorage.getItem('transactions')
);

let transactions =
	localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Capitilize first letter of string
const textCapitalized = text => text.charAt(0).toUpperCase() + text.slice(1);

// Add Transactions
const addTransaction = e => {
	e.preventDefault();

	const text = textCapitalized(textInput.value.trim());
	const amount = Number(amountInput.value);

	if (text === '' || amount.value === '') return;

	transactions.push({
		id: uuidv4(),
		text,
		amount,
	});
	addTransactionDOM();
	updateValues();
	updateLocalStorage();

	textInput.value = '';
	amountInput.value = '';
};

// Update local storage to current information
const updateLocalStorage = () =>
	localStorage.setItem('transactions', JSON.stringify(transactions));

// Remove Transaction by ID
const removeTransaction = id => {
	transactions = transactions.filter(transaction => transaction.id !== id);
	updateLocalStorage();
	init();
};

// Add transactions to DOM list
const addTransactionDOM = () => {
	list.innerHTML = '';

	transactions.forEach(transaction => {
		const item = document.createElement('li');
		const button = document.createElement('button');
		button.classList.add('delete-btn');
		button.textContent = 'X';

		// Add class based on value
		const itemClass = transaction.amount < 0 ? 'minus' : 'plus';
		const sign = transaction.amount < 0 ? '-' : '+';

		item.classList.add(itemClass);

		item.innerHTML = `
        ${transaction.text} 
        <span>
            ${sign}${Math.abs(transaction.amount)}
        </span>
    `;

		item.appendChild(button);
		list.appendChild(item);

		button.addEventListener('click', () => {
			removeTransaction(transaction.id);
		});
	});
};

// Update balance, income and expenses as they come in
const updateValues = () => {
	const amounts = transactions.map(transaction => transaction.amount);

	const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);

	const income = amounts
		.filter(amount => amount > 0)
		.reduce((acc, amount) => (acc += amount), 0)
		.toFixed(2);

	const expense = amounts
		.filter(amount => amount < 0)
		.reduce((acc, amount) => (acc += amount), 0)
		.toFixed(2);

	balance.textContent = `$${total}`;
	moneyPlus.textContent = `$${income}`;
	moneyMinus.textContent = `$${expense}`;
};

// start application
const init = () => {
	list.innerHTML = '';
	addTransactionDOM();
	updateValues();
};

export { addTransaction, init };
