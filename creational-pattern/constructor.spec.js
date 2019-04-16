import { Avenger } from './constructor';

describe('constructor', () => {
  test('it should create object using constructor', () => {
    const captainMarvel = new Avenger('Captain Marvel', 'Photon Blast');
    expect(captainMarvel.getDetails()).toBe('Captain Marvel\'s special power is Photon Blast');
  });
});