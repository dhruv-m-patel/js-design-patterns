
// old class
export class OldCalculator {
  constructor() {
    this.operations = function(value1, value2, op) {
      switch (op) {
        case 'add':
          return value1 + value2;
        case 'sub':
          return value1 - value2;
        default:
          return NaN;
      }
    };
  }
}

// new class
export class NewCalculator {
  constructor() {
    this.add = function(value1, value2) {
      return value1 + value2;
    };
    this.sub = function(value1, value2) {
      return value1 - value2;
    };
  }
}

// Adapter Class: wrapper for NewCalculator class
export class CalculatorAdapter {
  constructor() {
    const newCalculator = new NewCalculator();

    this.operations = function(value1, value2, op) {
      switch (op) {
        case 'add':
          // using the new implementation under the hood
          return newCalculator.add(value1, value2);
        case 'sub':
          return newCalculator.sub(value1, value2);
        default:
          return NaN;
      }
    };
  }
}