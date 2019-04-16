let cars = {};
class CarRegistry {
  constructor() {
    this.cars = cars;
  }

  addVehicle(id, vin, year) {
    if(Object.keys(this.cars).length 
      && this.cars[year]
      && this.cars[year].length 
      && this.cars[year].find(car => car.vin === vin)
    ) {
      throw new Error('Car already registered');
    }

    this.cars[year] = [].concat(this.cars[year] || [], ({
      carId: id,
      vin,
    }));
  }

  getLength(year) {
    return this.cars[year].length;
  }
}

let motorcycles = {};
class MotorcycleRegistry {
  constructor() {
    this.motorcycles = motorcycles;
  }

  addVehicle(id, vin, year) {
    if(Object.keys(this.motorcycles).length 
      && this.motorcycles[year] && this.motorcycles[year].length 
      && !!this.motorcycles[year].find(motorcycle => motorcycle.vin === vin)
    ) {
      throw new Error('Motorcycle already registered');
    }

    this.motorcycles[year] = [].concat(this.motorcycles[year] || [], ({
      motorcycleId: id,
      vin,
    }));
  }

  getLength(year) {
    return this.motorcycles[year].length;
  }
}

export const VEHICLE_TYPES = {
  CAR: 'car',
  MOTORCYCLE: 'motorcycle',
};

// Facade implementation
let vehicleId = 0;
export class VehicleRegistry {
  _getRegistry(vehicleType) {
    let registry;
    switch(vehicleType) {
      case VEHICLE_TYPES.CAR: registry = new CarRegistry(); break;
      case VEHICLE_TYPES.MOTORCYCLE: registry = new MotorcycleRegistry(); break;
      default:
        throw new Error('Registry not implemented');
    }
    return registry;
  }

  registerVehicle(vehicleType, vin, year) {
    this._getRegistry(vehicleType)
      .addVehicle(VehicleRegistry._generateId(), vin, year);
  }

  getLength(vehicleType, year) {
    return this._getRegistry(vehicleType).getLength(year);
  }

  static _generateId() {
    return vehicleId++;
  }
}