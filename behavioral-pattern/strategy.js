class Vehicle {
  travelTime() {
    return this._timeTaken;
  }
}

// strategy 1
export class Bus extends Vehicle {
  constructor() {
    super();
    this._timeTaken = 10;
  }
}

// strategy 2
export class Taxi extends Vehicle {
  constructor() {
    super();
    this._timeTaken = 5;
  }
}

// strategy 3
export class PersonalCar extends Vehicle {
  constructor() {
    super();
    this._timeTaken = 3;
  }
}

// encapsulation
export class Commute {
  getTravelTime(transport) {
    return transport.travelTime();
  }
}