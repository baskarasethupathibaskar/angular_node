function calculateBill() {
  const total = 100 * 1.13;
  return total; // total is returned
}
function calculateBill(billAmount , taxRate) {
    console.log(billAmount + '-' + taxRate);
    const total = billAmount + billAmount * taxRate
    return total;
}
calculateBill(100,0.13);
let billTotal = calculateBill(20 + 10 + 50, 0.75);
console.log(billTotal)

//------------------------------------
// default value for the parameter
function yell ( name = 'Silly Goose') {
    return `HEY ${name.toUpperCase() }`
}
let greetings = yell ('Baskar') // HEY BASKAR
console.log(greetings);
greetings = yell () // Hey silly goose
console.log(greetings);

//------------------------------------
function calculateBill (billAmount, taxRate = 0.13,
    tipRate = 0.15) {
        console.log('Running Calculate Bill!!!')
        console.log = (billAmount + billAmount + 
        ' taxRate: ' + taxRate + ' tipRate: ' + tipRate);

        const total = billAmount + billAmount * taxRate + billAmount * tipRate
        return total
    }

    calculateBill(100)
    calculateBill(100, 0.66)
    calculateBill (100, undefined, 0.66)