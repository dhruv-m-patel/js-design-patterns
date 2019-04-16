import makeRangeIterator from './iterator';

describe('iterator', () => {
  test('it should iterate on collection', () => {
    let it = makeRangeIterator(1, 10, 2);
    let result = it.next();
    while (!result.done) {
      result.value;
      result = it.next();
    }
    expect(result.value).toEqual(5);
  });
});