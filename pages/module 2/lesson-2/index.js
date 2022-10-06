//* Summarise 0.1 and 0.2
const NUM1 = 0.1;
const NUM2 = 0.2;
console.log((0.1 + 0.2).toFixed(1));

//* Adding string to num
const STR = '1';
const NUM = 2;
console.log(+STR + NUM);

//* Flash size
const FLASH = +prompt('Input your flash size:', 0);
console.log(`You can have ${Math.round((FLASH * 1024) / 820)} films on your flash drive)`);

//* Buy chocolate
const MONEY = +prompt('Input your amount of money:', 0);
const PRICE = +prompt('Input prise of chocolate:', 0);
console.log(`You can buy ${Math.round(MONEY / PRICE)} chocolates and you will have ${(MONEY / PRICE).toFixed(2)}$ in the end!`);

//* Revert number
const START_STRING = prompt('Input your number:');
const SIZE = START_STRING.length;
const START_NUM = +START_STRING;
let NEW_NUM = '';
for (i = 0; i < SIZE; i++){
  NEW_NUM += Math.floor(START_NUM % (10 ** (i + 1)) / (10 ** i));
}
console.log(NEW_NUM);

//* Bank
const DEPOSIT = +prompt('Input your deposit:');
const PERSENT = +prompt('Input your percent:');
const MONTH_AMOUNT = +prompt('Input month ammount:')
const MONTH = PERSENT / 100 / 12;
let NEW = DEPOSIT;
for (i = 0; i < MONTH_AMOUNT; i++){
  NEW += NEW * MONTH;
}
console.log((NEW - DEPOSIT).toFixed(2));

//* Bool
console.log(2 && 0 && 3);
console.log(2 || 0 || 3);
console.log(2 && 0 || 3);