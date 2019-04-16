import { SHAPES, ShapeFactory } from './factory-pattern';

describe('factory-pattern', () => {
  test('it should create objects for specified shape using factory pattern', () => {
    const factory = new ShapeFactory();

    const square = factory.createShape(SHAPES.SQUARE);
    expect(square.toString()).toBe('I am a Square');
    
    const triangle = factory.createShape(SHAPES.TRIANGLE);
    expect(triangle.toString()).toBe('I am a Triangle');
  });
});