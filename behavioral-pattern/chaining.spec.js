import CumulativeSum from './chaining';

describe('chaining', () => {
  test('it should result in cumulative sum', () => {
    const sum = new CumulativeSum();
    const result = sum.add(10).add(2).add(50).sum;
    expect(result).toEqual(10 + 2 + 50);
  });
});