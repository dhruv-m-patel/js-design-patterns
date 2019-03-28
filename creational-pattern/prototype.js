function Vehicle() {
  this.vehicleType = null;
  this.numberOfWheels = 0;
}

Vehicle.prototype = {
  initialize: function(vehicleType, numberOfWheels) {
    this.vehicleType = vehicleType;
    this.numberOfWheels = numberOfWheels;
  },

  printDetails: function() {
    console.log(`vehicleType: ${this.vehicleType}`);
    console.log(`numberOfWheels: ${this.numberOfWheels}`);
  }
};

const car = new Vehicle();
car.initialize('CAR', 4);
car.printDetails();

const motorcycle = new Vehicle();
motorcycle.initialize('MOTORCYCLE', 2);
motorcycle.printDetails();