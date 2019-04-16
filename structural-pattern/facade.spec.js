import { VehicleRegistry, VEHICLE_TYPES } from './facade';

describe('facade', () => {
  test('it should initialize and use facade', () => {
    const vehicleRegistry = new VehicleRegistry();
    vehicleRegistry.registerVehicle(VEHICLE_TYPES.CAR, '12345678901234567', '2013');
    vehicleRegistry.registerVehicle(VEHICLE_TYPES.CAR, '23456789012345678', '2013');
    expect(vehicleRegistry.getLength(VEHICLE_TYPES.CAR, 2013)).toEqual(2);
    
    vehicleRegistry.registerVehicle(VEHICLE_TYPES.MOTORCYCLE, '12345678901234567', '2013');
    vehicleRegistry.registerVehicle(VEHICLE_TYPES.MOTORCYCLE, '23456789012345678', '2013');
    expect(vehicleRegistry.getLength(VEHICLE_TYPES.MOTORCYCLE, 2013)).toEqual(2);
  });
});