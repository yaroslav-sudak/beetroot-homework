//* Function
function Prompt(text) {
  let isCorrect = false;
  while (!isCorrect) {
    let value = +prompt(text);
    if (value) {
      return value;
    }
  }
}

//* Variables
let name = 'Ярослав';
const year = 2022;
const uah_value = 37;

//* Wrong variables
// let 1d = '2d';
// let @qwe = 1;
// let const = 45;

//* Coments
// Single coment
/* 
  Multiple coment
*/

//* Cases
let camelCase;
let snake_case;
let PascalCase;
let Cobra_Case;

//* Input and output name
name = prompt("What's your name?");
alert(`Hello ${name}!!!`);

//* Count user years
const user_year = Prompt('What is your birth year?');
alert(`Your age is: ${year - user_year}!!!`);

//* Count scuare perimeter
const side = Prompt('Input size of square side(m):');
alert(`Square perimeter is ${side * 4}(m)`);

//* Count circle radius
const radius = Prompt('Input radius of circle(m):');
alert(`Circle square is ${radius ** 2 * Math.PI}(m^2)`);

//* Count the speed
const distance = Prompt('Input distance between two cities(km):');
const time = Prompt('Input time that you want to spend(h):');
alert(`Your speed have to be ${distance / time}(km/h)`);

//* 
const usd = Prompt('Input your dollars:');
alert(`You have ${usd * uah_value}(uah)`);

delete name, year, uah_value, camelCase, snake_case, PascalCase, Cobra_Case, user_year, side, radius, distance, time, usd;