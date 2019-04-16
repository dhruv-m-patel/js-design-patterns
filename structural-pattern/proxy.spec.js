import { databaseProxy } from './proxy';

describe('proxy', () => {
  test('it should use proxy to invoke methods', () => {
    expect(databaseProxy('image1.jpg')).toBe('image1.jpg - Response from network');
    expect(databaseProxy('image1.jpg')).toBe('Cached: image1.jpg - Response from network');
    expect(databaseProxy('image2.jpg')).toBe('image2.jpg - Response from network');
  });
});