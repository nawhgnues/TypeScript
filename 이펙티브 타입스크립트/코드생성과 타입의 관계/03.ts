// 객체의 속성 중 하나가 type을 알려주는 프로퍼티를 가지고 있다면 이를 통해 타입을 구분할 수 있다.

interface Square {
  kind: "square";
  width: number;
}

interface Rectangle extends Square {
  kind: "rectangle";
  height: number;
  width: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind === "rectangle") {
    shape; // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape; // Type is Square
    return shape.width * shape.width;
  }
}

calculateArea({
  height: 100,
  width: 100,
  kind: "rectangle",
});
