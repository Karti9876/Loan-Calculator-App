document.getElementById('calculatebtn').addEventListener('click' , calculateLoan);

function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById('loaninput').value);
    const Interest = parseFloat(document.getElementById('interestRate').value);
    const loanPeriod = parseFloat(document.getElementById('loanperiod').value);

    if(isNaN(loanAmount) || isNaN(Interest) || isNaN(loanPeriod)){
        alert("Please Enter a valid numbers for all the fields");
    }
    const monthlyInterest = Interest/100/12;
    const totalPayments = loanPeriod;
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1 + monthlyInterest , -totalPayments));   
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displayResult(monthlyPayment , totalInterest)
}

function displayResult(monthlyPayment , totalInterest){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong> Monthly Payment : ${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong> Total Interest : ${totalInterest.toFixed(2)} </strong></p>
    `
}