/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketPrice = 800;
let age = 70;
const student = true;

if (age < 10) {
    console.log("hey! boy your ticket free");
}

else if (student) {
    let discount = ticketPrice * 50 / 100;
    let payAmount = ticketPrice - discount;
    console.log(payAmount);
}
    
else if (age >= 60 && !student) {
    let discount = ticketPrice * 15 / 100;
    let payAmount = ticketPrice - discount;
    console.log(payAmount);
}

else {
    console.log(ticketPrice);
}