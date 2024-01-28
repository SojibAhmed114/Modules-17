// jodi age 15 ar nicche hoy tahole free.kintu jodi car theke tahole free hobe na. 
// age 60 ar beshi hole 50% discount but car thakle 10% discount.

let price = 500;
let age = 70;
const isCar = true;

if (age < 15 && !isCar) {
    console.log("you can eat for free");
}
else if(age < 15 && isCar) {
    console.log("hey boy pay some money");
}
else {
    if (age > 60 && isCar) {
        let discount = price * 10 / 100;
        let paybill = price - discount;
        console.log(paybill);
    }
        else {
            if (age > 60 && isCar === false) {             
                let discount = price * 50 / 100;
                let paybill = price - discount;
                console.log(paybill);
        }
            else {
                console.log(price);
        }
        }    
    
}


























// if (age < 15 && isCar === false) {
//     console.log("you can eat for free");
//     if (age > 60 && isCar === false) {              //problem
//         let discount = price * 50 / 100;
//         let paybill = price - discount;
//         console.log(paybill);
//     }
//     else {
//         (age > 60 && isCar) 
//         let discount = price * 10 / 100;
//         let paybill = price - discount;
//         console.log(paybill);
//     }
// }
 
// else (
//     console.log(price)
// )
