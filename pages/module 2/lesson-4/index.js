const log = console.log;
// * Function args count
const argsCount = (args = []) => {
  console.log(args.length);
};
argsCount([2, 54, 657, 6567, 56, 54]);

// * More, less or equal
const comparison = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};
log(comparison(5, 10));

// * Factorial
const factorial = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};
log(factorial(7));

// * Connecting of nums
const connect = (a, b, c) => {
  let num = +('' + a + b + c);
  return num;
};
log(connect(1, 4, 7));

// * Area
const figureArea = (a, b) => (b ? a * b : a * a);

log(figureArea(4, 7));
log(figureArea(6));

// * Perfect number
const perfectNumber = (a) => {
  let result = 0;
  for (let i = 1; i <= a / 2; i++) {
    if (a % i === 0) {
      result += i;
    }
  }
  if (a === result) {
    return true;
  } else {
    return false;
  }
};
log(perfectNumber(51));
log(perfectNumber(6));

// * If perfect number in range
const range = (min, max) => {
  const result = {};
  for (let i = min; i <= max; i++) {
    result[i] = perfectNumber(i);
  }
  return result;
};
log(range(2, 50));
