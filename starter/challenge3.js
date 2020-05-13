
function tipCaculator(bill){
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill <200){
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage*bill;
}
console.log(tipCaculator(200));
var bills = [124, 48, 268]
var tips = [tipCaculator(bills[0]),
                    tipCaculator(bills[1]),
                    tipCaculator(bills[2])];
var finalBill = [bills[0]+tips[0],
                bills[1]+tips[1],
                bills[2]+tips[2]];

console.log(tips);
console.log(finalBill);
/*
var tipFinal = [tipCaculator(bill[0]),tipCaculator(bill[1]),tipCaculator(bill[2])];
var billFinal = [tipCaculator(bill[0])+124,tipCaculator(bill[1])+48,tipCaculator(bill[2])+268];

console.log(tipFinal);
console.log(billFinal);
*/
