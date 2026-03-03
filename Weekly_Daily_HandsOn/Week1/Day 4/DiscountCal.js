function DiscountCal(money){
    if(money >= 5000){
        console.log(`Adding 20% Discount then total amount to pay ${money *(1-(20 /100))}`);
    }
    else if(money >= 3000 && money <= 4999){
        console.log(`Adding 10% Discount then total amount to pay ${money *(1-(10 /100))}`);
    }
    else {
        console.log("No Discount");
    
    }
}
DiscountCal(2000);