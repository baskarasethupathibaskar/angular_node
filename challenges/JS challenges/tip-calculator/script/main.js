const billInput = document.querySelector('.bill-input-wrapper input');
const personInput = document.querySelector('.people-input-wrapper input');
// const tipCard = document.querySelectorAll('.tip-percent-wrapper');
const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const fourButton = document.querySelector('.four');
const fiveButton = document.querySelector('.five');
const tipAmount = document.querySelector('.tip-amount-wrapper .price');
const totalAmount = document.querySelector('.total-amount-wrapper .price');
const resetBtn = document.querySelector('.reset-button');
// console.log(tipAmount.innerText);


billInput.addEventListener('change', (e) => {
    billInput.value = e.target.value;
    console.log(billInput.value);
    var billValue = billInput.value;
    // console.log("billValue = "+ billValue);
});
personInput.addEventListener('change', (e) => {
    personInput.value = e.target.value;
})



oneButton.addEventListener('click', (e) => {
    const billValue = billInput.value;
    const person = personInput.value;
    const total_bill_person = billValue / person;
    totalAmount.innerText = total_bill_person.toFixed(2);
    const total_amount_person = (total_bill_person*5)/100;
    tipAmount.innerText = total_amount_person.toFixed(2);
})
twoButton.addEventListener('click', (e) => {
    const billValue = billInput.value;
    const person = personInput.value;
    const total_bill_person = billValue / person;
    totalAmount.innerText = total_bill_person.toFixed(2);
    const total_amount_person = (total_bill_person*10)/100;
    tipAmount.innerText = total_amount_person.toFixed(2);
})
threeButton.addEventListener('click', (e) => {
    const billValue = billInput.value;
    const person = personInput.value;
    const total_bill_person = billValue / person;
    totalAmount.innerText = total_bill_person.toFixed(2);
    const total_amount_person = (total_bill_person*15)/100;
    tipAmount.innerText = total_amount_person.toFixed(2);
})
fourButton.addEventListener('click', (e) => {
    const billValue = billInput.value;
    const person = personInput.value;
    const total_bill_person = billValue / person;
    totalAmount.innerText = total_bill_person.toFixed(2);
    const total_amount_person = (total_bill_person*25)/100;
    tipAmount.innerText = total_amount_person.toFixed(2);
})
fiveButton.addEventListener('click', (e) => {
    const billValue = billInput.value;
    const person = personInput.value;
    const total_bill_person = billValue / person;
    totalAmount.innerText = total_bill_person.toFixed(2);
    const total_amount_person = (total_bill_person*50)/100;
    tipAmount.innerText = total_amount_person.toFixed(2);
})

resetBtn.addEventListener('click',() => {
    billInput.value = 0;
    personInput.value = 0;
    totalAmount.innerText = 0.00;
    tipAmount.innerText = 0.00;
})


