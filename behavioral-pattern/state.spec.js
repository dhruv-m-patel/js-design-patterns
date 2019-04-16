import { TrafficLight } from './state';

describe('state', () => {
  test('it should change states', () => {
    const trafficLight = new TrafficLight();
    expect(trafficLight.sign()).toBe('GO');
    
    trafficLight.change();
    expect(trafficLight.sign()).toBe('STOP');

    trafficLight.change();
    expect(trafficLight.sign()).toBe('STEADY');
    
    trafficLight.change();
    expect(trafficLight.sign()).toBe('GO');
  });
});