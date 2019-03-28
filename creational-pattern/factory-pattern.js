const SHAPES = {
  SQUARE: 'square',
  TRIANGLE: 'triangle',
};

class Square {
  constructor() {
    this.shapeType = SHAPES.SQUARE;
  }

  toString() {
    return 'I am a Square';
  }
}

class Triangle {
  constructor() {
    this.shapeType = SHAPES.TRIANGLE;
  }

  toString() {
    return 'I am a Triangle';
  }
}

class ShapeFactory {
  constructor() {
    this.createShape = function(shapeType) {
      let shape;
      switch(shapeType) {
        case SHAPES.SQUARE: shape = new Square(); break;
        case SHAPES.TRIANGLE: shape = new Triangle(); break;
        default: throw new Error('Shape not defined');
      }
      return shape;
    }
  }
}

const factory = new ShapeFactory();

const square = factory.createShape(SHAPES.SQUARE);
console.log(square.toString());

const triangle = factory.createShape(SHAPES.TRIANGLE);
console.log(triangle.toString());