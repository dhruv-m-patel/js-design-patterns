import { Developer, Tester } from './templating';

describe('templating', () => {
  test('it should use given template', () => {
    const dev = new Developer('Nathan', 100000);
    expect(dev.getPaid()).toBe('Nathan got paid 100000');
    expect(dev.work()).toBe('Nathan handles application development');

    const tester = new Tester('Brian', 90000);
    expect(tester.getPaid()).toBe('Brian got paid 90000');
    expect(tester.work()).toBe('Brian handles testing');
  });
});