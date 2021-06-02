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

addTransactionDOM();
