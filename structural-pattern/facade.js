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

  printRegistry() {
    console.log('>>>>>>>>>>>>>>> CarRegistry');
    Object.keys(this.cars).forEach(key => {
      this.cars[key].forEach(car => {
        console.log(`${car.carId} - ${key} - ${car.vin}`);
      });
    });
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

  printRegistry() {
    console.log('>>>>>>>>>>>>>>> MotorcycleRegistry');
    Object.keys(this.motorcycles).forEach(key => {
      Object.values(this.motorcycles[key]).forEach(motorcycle => {
        console.log(`${motorcycle.motorcycleId} - ${key} - ${motorcycle.vin}`);
      });
    });
  }
}

const VEHICLE_TYPES = {
  CAR: 'car',
  MOTORCYCLE: 'motorcycle',
};


// Facade implementation
let vehicleId = 0;
class VehicleRegistry {
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

  printRegistry(vehicleType) {
    this._getRegistry(vehicleType).printRegistry();
  }

  static _generateId() {
    return vehicleId++;
  }
}


const vehicleRegistry = new VehicleRegistry();
const car1 = vehicleRegistry.registerVehicle(VEHICLE_TYPES.CAR, '12345678901234567', '2013');
const car2 = vehicleRegistry.registerVehicle(VEHICLE_TYPES.CAR, '23456789012345678', '2013');
vehicleRegistry.printRegistry(VEHICLE_TYPES.CAR);

const motorcycle1 = vehicleRegistry.registerVehicle(VEHICLE_TYPES.MOTORCYCLE, '12345678901234567', '2013');
const motorcycle2 = vehicleRegistry.registerVehicle(VEHICLE_TYPES.MOTORCYCLE, '23456789012345678', '2013');
vehicleRegistry.printRegistry(VEHICLE_TYPES.MOTORCYCLE);