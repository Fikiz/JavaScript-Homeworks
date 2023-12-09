function withdrawCash(amountRequested) {
    const accountBalance = 1000; 

    if (amountRequested > accountBalance) {
        return "Not enough money";
    } else {
        const remainingBalance = accountBalance - amountRequested;
        return `Withdrawn: $${amountRequested}, Remaining balance: $${remainingBalance}`;
    }
}



function withdrawCashPrompt() {
    const amountRequested = parseFloat(prompt("Enter the amount you want to withdraw:"));

    if (isNaN(amountRequested) || amountRequested <= 0) {
        return "Invalid amount entered";
    }

    const accountBalance = 1000; 

    if (amountRequested > accountBalance) {
        return "Not enough money";
    } else {
        const remainingBalance = accountBalance - amountRequested;
        return `Withdrawn: $${amountRequested}, Remaining balance: $${remainingBalance}`;
    }
}


console.log(withdrawCashPrompt());




