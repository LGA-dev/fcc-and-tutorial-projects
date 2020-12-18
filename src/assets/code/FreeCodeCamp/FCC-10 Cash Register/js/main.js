let messageText = document.querySelector("#message");

function message() {
  messageText.innerHTML = "I wasn't able to make this project into something usable, but you can check the code if you want.";
}

let denominations = [
  ["PENNY", 1], ["NICKEL", 5], 
  ["DIME", 10], ["QUARTER", 25], 
  ["ONE", 100], ["FIVE", 500], 
  ["TEN", 1000], ["TWENTY", 2000], 
  ["ONE HUNDRED", 10000]
]

function checkCashRegister(passedPrice, passedCash, cashInDrawer) {
  let cashToReturn = Math.round(passedCash * 100) - Math.round(passedPrice * 100);
  let cashAvailable = {};
  let cashToPay = {};
  // Get money values from denominations as an object
    cashInDrawer.forEach(function(denominations) {
    cashAvailable[denominations[0]] = Math.round(denominations[1] * 100);
  })

  // Initialize index
  let index = denominations.length - 1;

  // Loop until cash to return is equal to 0
  while (index >= 0 && cashToReturn > 0) {
    let moneyName = denominations[index][0];
    let moneyValue = denominations[index][1];
    if(cashToReturn - moneyValue > 0 && cashAvailable[moneyName], cashToReturn) {
      cashToPay[moneyName] = 0;
      // Loop until cash available is 0 and the cash to return is more than 0 (So it depends on moneyValue)
      while (cashAvailable[moneyName] > 0 && cashToReturn - moneyValue >= 0) {
        cashAvailable[moneyName] -= moneyValue;
        cashToPay[moneyName] += moneyValue;
        cashToReturn -= moneyValue;
      }
    }
    // -1 to index and continue while loop
    index -= 1;
  }


  // Check if cash register is empty
  if(cashToReturn === 0) {
    let checkRegisterEmpty = true;
    // If the cash available is greater than 0, change boolean to false
    Object.keys(cashAvailable).forEach(function(moneyType) {
      if(cashAvailable[moneyType] > 0) {
        checkRegisterEmpty = false;
      }
    })
    console.log(checkRegisterEmpty);
    // Return CLOSED if register is empty
    if(checkRegisterEmpty) {
      return {status: "CLOSED", change: cashInDrawer}
    } 
    // Check for the total change to get
    else {
      let changeArray = [];
      Object.keys(cashToPay).map(function(moneyType) {
        // Only push values that are greather than 0 or empty
        if(cashToPay[moneyType] > 0) {
          changeArray.push([moneyType, cashToPay[moneyType] / 100]);
        }
      });
      // Return OPEN if register isn't empty
      return {status: "OPEN", change: changeArray}
    }
  }

  // Default return
  return {status: "INSUFFICIENT_FUNDS", change: []}
}

let finalResultTotal = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

