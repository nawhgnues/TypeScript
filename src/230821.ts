"use strict";
//union type
type Fruit = "apple" | "banana" | "orange";
const fruit: Fruit = "apple";

//mapped type
const PRICE_MAP: { [fruit in Fruit]: number } = {
  apple: 1000,
  banana: 1500,
  orange: 2000,
};

//type guard
function getAgeText(age: number | string) {
  if (typeof age === "number") {
    return age.toFixed(2);
  } else {
    return age.trim();
  }
}

interface Person {
  name: string;
  age: number;
}
interface Product {
  name: string;
  price: number;
}
function toString(value: Person | Product) {
  if ("age" in value) {
    return `${value.name} ${value.age}세`;
  } else {
    return `${value.name} ${value.price}원`;
  }
}

//discriminated Union
type Shape = {
  kind: "circle" | "rect";
  radius?: number;
  width?: number;
  height?: number;
};

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius! ** 2;
    case "rect":
      return shape.width! * shape.height!;
    default:
      throw new Error("Unknown shape kind");
  }
}

//extends
interface Persion {
  name: string;
  age: number;
}

interface Developer extends Persion {
  position: string;
}

const nawhgnues: Developer = {
  name: "seunghwan",
  age: 25,
  position: "FE",
};

// generic Type
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

logText<string>("Hello World!");

// Generic type in interface
interface Menu<T> {
  value: T;
  price: number;
}

const hamburger: Menu<string> = { value: "hamburger", price: 5000 };
