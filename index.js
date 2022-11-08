const readlineSync = require('readline-sync');
let money = [
  500.0, 200.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.0, 1.0, 0.5, 0.2, 0.1, 0.05,
  0.01,
];
let price = Number(readlineSync.question('Please Enter the price: '));
let paidAmount = Number(readlineSync.question('Please Enter the paid amount: '));

let cashBack = (price, paidAmount) => {
   let restAmount = +(paidAmount - price).toFixed(2);
   if (restAmount === 0) {
    return `Thanks for the payment. Have a nice day !`
   }
   if (restAmount < 0) {
    return `You are still need to pay ${0 - restAmount}E`
   }
   console.log('restAmount :>> ', restAmount);
  
   let returnObject = {}
   for (const note of money) {
     if (restAmount % note > 0) {
       let amount = Math.floor(restAmount / note);
       restAmount -= note * amount;
       if (amount!== 0) {
         returnObject[note] = amount;
       }
     } else if (restAmount % note === 0) {
       let amount = Math.floor(restAmount / note);
       returnObject[note] = amount;
      break
     }
   }
return returnObject

};

console.log("cashBack :>> ", cashBack(price, paidAmount));
