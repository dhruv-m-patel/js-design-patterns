import { 
  OldCalculator,
  NewCalculator,
  CalculatorAdapter 
} from './adapter';

describe('adapter', () => {
  test('it should produce same output with adapter', () => {
    const adapter = new CalculatorAdapter();
    expect(adapter.operations(100, 5, 'add')).toEqual(new OldCalculator().operations(100, 5, 'add'));
    expect(adapter.operations(100, 5, 'sub')).toEqual(new NewCalculator().sub(100, 5));
  });
});