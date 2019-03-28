
// old class
class OldCalculator {
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
class NewCalculator {
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
class CalculatorAdapter {
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

const calc1 = new OldCalculator();
console.log(calc1.operations(100, 5, 'add')); // 105
console.log(calc1.operations(100, 5, 'sub')); // 95

const calc2 = new NewCalculator();
console.log(calc2.add(100, 5)); // 105
console.log(calc2.sub(100, 5)); // 95

const adapter = new CalculatorAdapter();
console.log(adapter.operations(100, 5, 'add')); // 105;
console.log(adapter.operations(100, 5, 'sub')); // 95;