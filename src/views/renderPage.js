const renderPage = () => {
	const rootDiv = document.querySelector('#root');
    
	rootDiv.innerHTML = `
		<h2>Expense Tracker</h2>
		<div class="container">
			<h4>Your Balance</h4>
			<h1 id="balance">$0.00</h1>

			<div class="income-expense-container">
				<div>
					<h4>Income</h4>
					<p id="money-plus" class="money money-plus">+0.00</p>
				</div>
				<div>
					<h4>Expense</h4>
					<p id="money-minus" class="money money-minus">-0.00</p>
				</div>
			</div>

			<h3>History</h3>
			<ul id="list" class="list">
				<li class="minus">
					Cash <span>-$400</span> <button class="delete-btn">X</button>
				</li>
			</ul>

			<h3>Add New Transaction</h3>
			<form id="form">
				<div class="form-control">
					<label for="text">Text</label>
					<input type="text" id="text" placeholder="Enter Name of Income / Expense" />
				</div>
				<div class="form-control">
					<label for="amount"
						>Amount <br />
						(negative -expense, positive +income)</label
					>
					<input type="number" id="amount" placeholder="Enter Amount of Income / Expense" />
				</div>
				<button class="btn">Add Transaction</button>
			</form>
		</div>    
    `;

	return rootDiv;
};

export { renderPage };
