import { Cat } from './decorator';

describe('decorator', () => {
  test('it should properly decorate object', () => {
    const garfield = new Cat('Garfield');
    expect(garfield.meow()).toBe('Garfield says Meow!!!');
  });

  test('it should enforce decorator behavior', () => {
    try {
      const garfield = new Cat('Garfield');
      garfield.meow = function() {
        console.log('this should never occurr');
      }
    } catch (err) {
      expect(err.message).toEqual('Cannot assign to read only property \'meow\' of object \'#<Cat>\'');
    }
  })
});