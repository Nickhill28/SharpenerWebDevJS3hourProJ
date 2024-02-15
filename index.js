document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    // Load expenses from local storage
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Render expenses
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.classList.add('expense-item');

        const amountSpan = document.createElement('span');
        amountSpan.textContent = `${expense.amount} - `;
        li.appendChild(amountSpan);

        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = expense.description;
        li.appendChild(descriptionSpan);

        const categorySpan = document.createElement('span');
        categorySpan.textContent = `- ${expense.category}`;
        li.appendChild(categorySpan);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete Expense';
        deleteBtn.addEventListener('click', () => {
            expenses.splice(expenses.indexOf(expense), 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            li.remove();
        });
        li.appendChild(deleteBtn);

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit Expense';
        editBtn.addEventListener('click', () => {
            // Edit expense logic
        });
        li.appendChild(editBtn);

        expenseList.appendChild(li);
    });

    // Add expense form submit event listener
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = parseFloat(document.getElementById('amount').value);
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;

        const expense = { amount, description, category };
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        const li = document.createElement('li');
        li.classList.add('expense-item');

        const amountSpan = document.createElement('span');
        amountSpan.textContent = `${expense.amount} - `;
        li.appendChild(amountSpan);

        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = expense.description;
        li.appendChild(descriptionSpan);

        const categorySpan = document.createElement('span');
        categorySpan.textContent = `- ${expense.category}`;
        li.appendChild(categorySpan);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete Expense';
        deleteBtn.addEventListener('click', () => {
            expenses.splice(expenses.indexOf(expense), 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            li.remove();
        });
        li.appendChild(deleteBtn);

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit Expense';
        editBtn.addEventListener('click', () => {
            // Edit expense logic
        });
        li.appendChild(editBtn);

        expenseList.appendChild(li);

        expenseForm.reset();
    });
});