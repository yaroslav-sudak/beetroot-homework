// * Car object
const car = {
  // Producer of the car
  producer: 'Tesla',
  // Model of the car
  model: 'X',
  // Year when car was created
  bornYear: 1992,
  // Average speed of the car
  averageSpeed: 60,
  // How much fuel can car contain
  fuelVolume: 80,
  // Usage of fuel per 100 km
  useOfFuel: 3.5,
  // Previous drivers of the car
  drivers: ['Katerine', 'MisterX', 'Joe'],
  // Show information about car
  Info: function () {
    let drivers = '';
    this.drivers.forEach((item, index) => {
      if (index > 0) {
        drivers += `, ${item}`;
      } else {
        drivers += item;
      }
    });
    console.log(
      `I represent to you our car. Here is ${this.producer} model ${
        this.model
      } that was made in ${this.bornYear} and have average speed around ${
        this.averageSpeed
      } Km/h. Its fuel tank volume is ${
        this.fuelVolume
      } liters while usage of fuel per 100 kilometers is ${
        this.useOfFuel
      }l. Besides, this car had ${this.drivers.length} previous ${
        this.drivers.length === 1 ? 'driver' : 'drivers'
      }${this.drivers.length === 0 ? drivers : ': ' + drivers}.`
    );
  },
  // Add given driver to drivers array
  DriverAdd: function (driver) {
    this.drivers.push(driver);
    return this.drivers;
  },
  // Return if driver is in drivers array
  DriverFind: function (driver) {
    return this.drivers.includes(driver);
  },
  // Show how much time and fuel will be used during passing given distance
  Time: function (distance) {
    console.log(
      `You will waste ${(
        distance / this.averageSpeed +
        Math.floor(distance / this.averageSpeed / 4)
      ).toFixed(1)}h and spend ${((distance / 100) * this.useOfFuel).toFixed(
        2
      )}l of fuel during this trip.`
    );
  },
};

// * Time object
const time = {
  hours: 2,
  minutes: 38,
  seconds: 51,
  // Show time
  WhatTime: function () {
    let hours = !(this.hours < 10) ? this.hours : '0' + this.hours;
    let minutes = !(this.minutes < 10) ? this.minutes : '0' + this.minutes;
    let seconds = !(this.seconds < 10) ? this.seconds : '0' + this.seconds;
    console.log(`Now is ${hours + ':' + minutes + ':' + seconds}`);
  },
  // Add given amount of seconds to time
  AddSeconds: function (seconds) {
    this.seconds += seconds;
    if (this.seconds > 60) {
      let minutes = Math.floor(this.seconds / 60);
      this.seconds -= minutes * 60;
      this.AddMinutes(minutes);
    }
  },
  // Add given amount of minutes to time ***using by AddSeconds method***
  AddMinutes: function (minutes) {
    this.minutes += minutes;
    if (this.minutes) {
      let hours = Math.floor(this.minutes / 60);
      this.minutes -= hours * 60;
      this.hours += hours;
      if (this.hours) {
        let days = Math.floor(this.hours / 24);
        this.hours -= days * 24;
      }
    }
    this.WhatTime();
  },
};

// * Fraction object
const fraction = {
  numerator: 0,
  // Denominator can't equal 0
  denominator: 0,
  // Return the bigest common denominator
  BiggestDenominator: (firstNumber, secondNumber) => {
    const minNumber = Math.min(firstNumber, secondNumber);
    let biggestDenominator;
    if (firstNumber % minNumber === 0 && secondNumber % minNumber === 0) {
      biggestDenominator = minNumber;
    } else {
      for (let i = 1; i <= minNumber; i++) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
          biggestDenominator = i;
        }
      }
    }
    return biggestDenominator;
  },
  // Show sum of two fractions
  Sum: function (fraction1, fraction2) {
    let numerator;
    let denominator;
    if (fraction1.denominator !== fraction2.denominator) {
      numerator =
        fraction1.numerator * fraction2.denominator +
        fraction2.numerator * fraction1.denominator;
      denominator = fraction1.denominator * fraction2.denominator;
    } else {
      denominator = fraction1.denominator;
      numerator = fraction1.numerator + fraction2.numerator;
    }
    console.log(
      `Sum of ${fraction1.numerator}/${fraction1.denominator} and ${fraction2.numerator}/${fraction2.denominator} is ${numerator}/${denominator}`
    );
  },
  // Show substraction of two fractions
  Substract: function (fraction1, fraction2) {
    let numerator;
    let denominator;
    if (fraction1.denominator !== fraction2.denominator) {
      numerator =
        fraction1.numerator * fraction2.denominator -
        fraction2.numerator * fraction1.denominator;
      denominator = fraction1.denominator * fraction2.denominator;
    } else {
      denominator = fraction1.denominator;
      numerator = fraction1.numerator - fraction2.numerator;
    }
    console.log(
      `Substraction of ${fraction1.numerator}/${fraction1.denominator} and ${fraction2.numerator}/${fraction2.denominator} is ${numerator}/${denominator}`
    );
  },
  Multiply: function (fraction1, fraction2) {
    const num1 = this.BiggestDenominator(
      fraction1.numerator,
      fraction2.denominator
    );
    const num2 = this.BiggestDenominator(
      fraction1.denominator,
      fraction2.numerator
    );
    const numerator = (fraction1.numerator * fraction2.numerator) / num1 / num2;
    const denominator =
      (fraction1.denominator * fraction2.denominator) / num1 / num2;
    console.log(
      `Multiplication of ${fraction1.numerator}/${fraction1.denominator} and ${fraction2.numerator}/${fraction2.denominator} is ${numerator}/${denominator}`
    );
  },
  Divide: function (fraction1, fraction2) {
    const num1 = this.BiggestDenominator(
      fraction1.numerator,
      fraction2.numerator
    );
    const num2 = this.BiggestDenominator(
      fraction1.denominator,
      fraction2.denominator
    );
    const numerator = (fraction1.numerator * fraction2.denominator) / num1 / num2;
    const denominator =
      (fraction1.denominator * fraction2.numerator) / num1 / num2;
    console.log(
      `Division of ${fraction1.numerator}/${fraction1.denominator} and ${fraction2.numerator}/${fraction2.denominator} is ${numerator}/${denominator}`
    );
  },
  Reduce: function (fraction) {
    const commonDenominator = this.BiggestDenominator(fraction.numerator, fraction.denominator);
    fraction.numerator /= commonDenominator;
    fraction.denominator /= commonDenominator;
    return fraction;
  },
};
const fraction1 = {
  numerator: 16,
  denominator: 24,
};
const fraction2 = {
  numerator: 12,
  denominator: 14,
};
