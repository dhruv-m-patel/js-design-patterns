import { Vehicle } from './prototype';

describe('prototype', () => {
  test('it should create object using same prototype', () => {
    const car = new Vehicle();
    car.initialize('CAR', 4);
    expect(car.printDetails()).toBe('vehicleType: CAR, numberOfWheels: 4');
    
    const motorcycle = new Vehicle();
    motorcycle.initialize('MOTORCYCLE', 2);
    expect(motorcycle.printDetails()).toBe('vehicleType: MOTORCYCLE, numberOfWheels: 2');
  });
});