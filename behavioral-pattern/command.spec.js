import Command, { SpecialMath } from './command';

describe('command', () => {
  test('it should execute given commands', () => {
    const x = new Command(new SpecialMath(5));
    const square = x.execute('square');
    expect(square).toEqual(25);

    const cube = x.execute('cube');
    expect(cube).toEqual(125);

    expect(x.commandsExecuted).toContain('square', 'cube');
  });

  test('it should log commands executed', () => {
    const x = new Command(new SpecialMath(5));
    x.execute('square');
    x.execute('cube');
    expect(x.commandsExecuted).toContain('square', 'cube');
  });
});