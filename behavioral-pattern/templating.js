class Employee {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }

  work() {
    return `${this._name} handles ${this.responsibilities() /* gap to be filled by subclass */}`;
  }

  getPaid() {
    return `${this._name} got paid ${this._salary}`;
  }
}

export class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // details handled by subclass
  responsibilities() {
    return 'application development';
  }
}

export class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // details handled by subclass
  responsibilities() {
    return 'testing';
  }
}