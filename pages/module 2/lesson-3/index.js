// * Your age
let isCorrect = false;
let user_age;
while (!isCorrect) {
  user_age = +prompt('What is your age?');
  if (user_age >= 0) {
    isCorrect = true;
  }
}
if (user_age < 12) {
  console.log('Ти дитина!!!');
} else if (user_age < 18) {
  console.log('Ти підліток!!!');
} else if (user_age < 60) {
  console.log('Ти дорослий!!!');
} else {
  console.log('Ти пенсіонер!!!');
}

// * Switch number to symbol
const symbolNumber = +prompt('Input number from 0 to 9:');
switch (symbolNumber) {
  case 0:
    console.log(')');
    break;
  case 1:
    console.log('!');
    break;
  case 2:
    console.log('@');
    break;
  case 3:
    console.log('#');
    break;
  case 4:
    console.log('$');
    break;
  case 5:
    console.log('%');
    break;
  case 6:
    console.log('^');
    break;
  case 7:
    console.log('&');
    break;
  case 8:
    console.log('*');
    break;
  case 9:
    console.log('(');
    break;
  default:
    console.log('Unknown number!!!');
    break;
}

// * Range
const rangeBegin = +prompt('Input start of the range:');
const rangeEnd = +prompt('Input end of the range:');
let rangeSum = 0;
for (let i = rangeBegin; i <= rangeEnd; i++) {
  rangeSum += i;
}
console.log(
  `Sum of the range from ${rangeBegin} to ${rangeEnd} is ${rangeSum}`
);

// * The biggest common denominator
const firstNumber = +prompt('Input first number:');
const secondNumber = +prompt('Input second number:');
const minNumber = Math.min(firstNumber, secondNumber);
let biggestDenominator;
for (let i = 1; i <= minNumber; i++) {
  if (firstNumber % i === 0 && secondNumber % i === 0) {
    biggestDenominator = i;
  }
}
console.log(
  `The biggest common denominator of ${firstNumber} and ${secondNumber} is ${biggestDenominator}!`
);

// * All decimals
const number = +prompt('Input your number:');
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(`${number} have denominator ${i}`);
  }
}

// * Palindrome
const palindrome = prompt('Введіть паліндром:');
const size = palindrome.length;
const halfSize = Math.round(palindrome.length / 2);
let isPalindrome = true;
for (let i = 0; i <= halfSize; i++) {
  if (palindrome[i] != palindrome[size - i - 1]) {
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {
  console.log(`${palindrome} is a palindrome`);
} else {
  console.log(`${palindrome} is not a palindrome`);
}

// * Discount
const price = +prompt('Input price to pay:');
minDiscount = 3;
midDiscount = 5;
maxDiscount = 7;
if (price < 200) {
  console.log(`Ammount to be paid is ${price}`);
} else if (price < 300) {
  console.log(
    `Ammount to be paid is ${((price * (100 - minDiscount)) / 100).toFixed(2)}`
  );
} else if (price < 500) {
  console.log(
    `Ammount to be paid is ${((price * (100 - midDiscount)) / 100).toFixed(2)}`
  );
} else {
  console.log(
    `Ammount to be paid is ${((price * (100 - maxDiscount)) / 100).toFixed(2)}`
  );
}

// * Type of numbers
let positive = 0;
let negative = 0;
let nullnumber = 0;
let pair = 0;
let unpair = 0;
for (let i = 0; i < 10; i++) {
  let number = +prompt(
    'Input number to check if it is positive, negative, null, pair, unpair:'
  );
  if (number < 0) {
    negative++;
  } else if (number > 0) {
    positive++;
  } else if (number === 0) {
    nullnumber++;
  }
  if (number % 2 == 0) {
    pair++;
  } else if (number % 2 != 0) {
    unpair++;
  }
}
console.log(
  `Positive: ${positive}, negative: ${negative}, nulls: ${nullnumber}, pair: ${pair}, unpair: ${unpair}`
);

// * Days of week
let today = 'Monday';
let todayNumber = 1;
let agree;
do {
  agree = confirm(`Today is ${today}, tap OK to see next day.`);
  todayNumber++;
  switch (todayNumber) {
    case 1:
      today = 'Monday';
      break;
    case 2:
      today = 'Tuesday';
      break;
    case 3:
      today = 'Wednesday';
      break;
    case 4:
      today = 'Thursday';
      break;
    case 5:
      today = 'Friday';
      break;
    case 6:
      today = 'Saturday';
      break;
    case 7:
      today = 'Sunday';
      break;
    default:
      todayNumber = 1;
      today = 'Monday';
      break;
  }
} while (agree);

// * Guess the number
console.log('Think about any number from 0 to 100 and I will guess it!!!');
isRight = false;
let minNum = 0;
let maxNum = 500;
isRight = confirm(`Is your number ${maxNum}?`);
if (isRight) {
  console.log(`Your number is ${maxNum}`);
} else {
  while (true) {
    let centerNum = Math.floor((minNum + maxNum) / 2);
    const answer = prompt(
      `Is ${centerNum} your number? ("=" - it is my number, "<" - my number smaller, ">" - my number bigger)`
    );
    if (answer === '=') {
      console.log(`Your number is ${centerNum}`);
      break;
    } else if (answer === '<') {
      maxNum = centerNum;
    } else if (answer === '>') {
      minNum = centerNum;
    }
  }
}

// * Multiplication table
minValue = 2;
maxValue = 9;
for (let i = minValue; i <= maxValue; i++) {
  str = '';
  for (let j = 1; j <= 10; j++) {
    str += j * i + ' ';
  }
  console.log(str);
}

// * Calendar
const date = prompt('Input your date (Example: "10.01.2000"):');
let day = +(date[0] + date[1]);
let month = +(date[3] + date[4]);
let year = +(date[6] + date[7] + date[8] + date[9]);
day++;
if (day > 28) {
  if (month === 2) {
    if (year % 4 === 0) {
      if (day > 29) {
        day = 1;
        month++;
      }
    } else {
      if (day > 28) {
        day = 1;
        month++;
      }
    }
  } else if (
    (month % 2 === 0 && month <= 7) ||
    (month % 2 !== 0 && month > 7)
  ) {
    if (day > 30) {
      day = 1;
      month++;
    }
  } else if (
    (month % 2 !== 0 && month <= 7) ||
    (month % 2 === 0 && month > 7)
  ) {
    if (day > 31) {
      day = 1;
      month++;
    }
  }
}
if (month > 12) {
  month = 1;
  year++;
}
if (`${day}`.length === 1){
  day = '0' + day;
}
if (`${month}`.length === 1){
  month = '0' + month;
}
console.log(`Next day will be ${day}.${month}.${year}!!!`);
