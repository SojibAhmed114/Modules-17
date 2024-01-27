const money = 8;

if (money > 300) {
    console.log("tor kache to onek tk ache re")
}

else {
    if (money > 200) {
        console.log("ata onek hard lage re");
    }
    else {
        if (money > 10) {
            console.log("tk e nai temon akta");
        }
        else {
            console.log("thak onek hoiche r parbi na");
        }
    }
}


const age = 60;
const price = 500;
if (age < 12) {
    console.log("you can eat for free");
} 

else {
    if (age >= 60) {
        const discount = price * 50 / 100;
        const payment = price - discount;
        console.log(payment);
    }
    else {
        if (age >= 40) {
            const discount = price * 30 / 100;
            const payment = price - discount;
            console.log(payment);
        }
        else {
            console.log(price)
        }
    }
}