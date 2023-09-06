// 클래스의 경우네는 타입뿐만 아니라 값이기에 트랜스파일 시에 사라지지 않는다.
// 따라서, 런타임에 비교가 가능하다.

class Square {
  constructor(public width: number) {}
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape = Square;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    shape; // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape; // Type is Square
    return shape.width * shape.width; // OK
  }
}

calculateArea(new Square(10));
