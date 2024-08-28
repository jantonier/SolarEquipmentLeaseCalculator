function calculatePayments() {
    let initialPayment = parseFloat(document.getElementById('initialPayment').value);
    let leaseYears = parseInt(document.getElementById('leaseYears').value);
    let annualIncrease = parseFloat(document.getElementById('annualIncrease').value) / 100;

    let resultsBody = document.getElementById('resultsBody');
    resultsBody.innerHTML = '';

    for (let i = 1; i <= leaseYears; i++) {
        let payment = initialPayment * Math.pow(1 + annualIncrease, i - 1);

        let row = document.createElement('tr');
        let yearCell = document.createElement('td');
        let paymentCell = document.createElement('td');

        yearCell.textContent = i;
        paymentCell.textContent = "$" + payment.toFixed(2);

        row.appendChild(yearCell);
        row.appendChild(paymentCell);
        resultsBody.appendChild(row);
    }
}
