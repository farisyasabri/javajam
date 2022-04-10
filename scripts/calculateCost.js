alert("Enter Coffee Bean ID (1-4) (0 to stop) \n• 1: Brazil Cerrado = RM42 \n• 2: Vanguard Blend = RM42 \n• 3: Organic Marcala = RM56 \n• 4: Taster Pack Trio = RM 69");

var total = 0;
do{
    var coffeeID = parseInt(prompt("Enter Coffee id"));
    if(coffeeID>4){
        alert("Coffee Bean ID must be between 1 and 4 or 4 to stop");
        continue;
    }
    var numOfpack = parseInt(prompt("Enter number of pack of coffee beans that you want to purchase:")) ; 
    total = total + calculateTotal(coffeeID,numOfpack);
    alert("total cost for " + numOfpack + " pack(S) of coffee is "+ total);
    
}while(coffeeID!=0);



function calculateTotal(coffeeID,numOfpack){
    let cost;
    switch(coffeeID){
        case 1: cost = 42*numOfpack;
            break;
        case 2: cost = 42*numOfpack;
            break;
        case 3: cost = 56*numOfpack;
            break;
        case 4: cost = 69*numOfpack;
            break;
    }
    return cost;
    
}