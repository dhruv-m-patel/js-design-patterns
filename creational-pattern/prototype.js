export function Vehicle() {
  this.vehicleType = null;
  this.numberOfWheels = 0;
}

Vehicle.prototype = {
  initialize: function(vehicleType, numberOfWheels) {
    this.vehicleType = vehicleType;
    this.numberOfWheels = numberOfWheels;
  },

  printDetails: function() {
    return `vehicleType: ${this.vehicleType}, numberOfWheels: ${this.numberOfWheels}`;
  }
};