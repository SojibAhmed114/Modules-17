// discount calculation

// const price = 1000;
// if (price >= 15000) {
//     // 10% discount
//     const discount = price * 10 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount);
// }

// else if (price >= 10000) {
//     // 5% discount
//     const discount = price * 5 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount);
// }

// else {
//     console.log(price);
// }

// ...........................
// const tk = 10000;
// if (tk >= 5000) {
//     // 15% discount
//     const discount = tk * 15 / 100;
//     const yourPayment = tk - discount;
//     console.log(yourPayment);
// }

// else if (tk >= 3000) {
//     // 10% discount
//     const discount = tk * 10 / 100;
//     const yourPayment = tk - discount;
//     console.log(yourPayment)
// }

// else {
//     console.log(tk);
// }


const footPrice = 1450;
const age = 64;
if (age < 12) {
    console.log("You can eat for fee");
}
else if (age >= 60) {
    const discount = footPrice * 50 / 100;
    const payment = footPrice - discount;
    console.log(payment);
}
else if (age >= 40) {
    const discount = footPrice * 30 / 100;
    const payment = footPrice - discount;
    console.log(payment);
}
else {
    console.log(footPrice);
}