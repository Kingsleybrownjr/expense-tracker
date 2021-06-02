import { renderPage } from './views/renderPage';

renderPage();

const balance = document.querySelector('#balance');
const moneyPlus = document.querySelector('#money-plus');
const moneyMinus = document.querySelector('#money-minus');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const text = document.querySelector('#text');
const amount = document.querySelector('#amout');

const dummyTransactions = [
	{
		id: 1,
		text: 'Flower',
		amount: -20,
	},
	{
		id: 2,
		text: 'Salary',
		amount: 300,
	},
	{
		id: 3,
		text: 'Book',
		amount: -10,
	},
	{
		id: 4,
		text: 'Camera',
		amount: 150,
	},
];

let transactions = dummyTransactions;

// Add transactions to DOM list
const addTransactionDOM = () => {
	transactions.forEach(transaction => {
		const item = document.createElement('li');
		// Add class based on value
		const itemClass = transaction.amount < 0 ? 'minus' : 'plus';
		const sign = transaction.amount < 0 ? '-' : '+';

		item.classList.add(itemClass);

		item.innerHTML = `
        ${transaction.text} 
        <span>
            ${sign}${Math.abs(transaction.amount)}
        </span>
        <button class='delete-btn'>X</button>
    `;
		list.appendChild(item);
	});
};

const updateValues = () => {
	const amounts = transactions.map(transaction => transaction.amount);

	const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);

	const income = amounts
		.filter(amount => amount > 0)
		.reduce((acc, amount) => (acc += amount), 0)
		.toFixed(2);

	const expense = amounts
		.filter(amount => amount < 0)
		.reduce((acc, amount) => ((acc += amount), 0) * -1)
		.toFixed(2);

	balance.textContent = `$${total}`;
	moneyPlus.textContent = `$${income}`;
	moneyMinus.textContent = `$${expense}`;
};

const init = () => {
	list.innerHTML = '';
	addTransactionDOM();
	updateValues();
};

init();
