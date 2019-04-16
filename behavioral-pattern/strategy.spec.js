import { Bus, Taxi, PersonalCar, Commute } from './strategy';

describe('strategy', () => {
  test('it should use given strategy', () => {
    // usage
    const commute = new Commute();
    expect(commute.getTravelTime(new Taxi())).toEqual(5);
    expect(commute.getTravelTime(new Bus())).toEqual(10);
    expect(commute.getTravelTime(new PersonalCar())).toEqual(3);
  });
});