import { Airplane, TrafficTower } from './mediator';

describe('mediator', () => {
  test('it should iterate on collection', () => {
    const tower = new TrafficTower();
    const airplanes = [
      new Airplane(10), 
      new Airplane(20), 
      new Airplane(30),
    ];
    airplanes.forEach(airplane => {
      tower.register(airplane);
    });

    const [
      coordinates1, 
      coordinates2, 
      coordinates3,
    ] = [
      airplanes[0].requestCoordinates(),
      airplanes[1].requestCoordinates(),
      airplanes[2].requestCoordinates(),
    ];

    expect(coordinates1).toContain(20, 30);
    expect(coordinates2).toContain(10, 30);
    expect(coordinates3).toContain(10, 20);
  });
});