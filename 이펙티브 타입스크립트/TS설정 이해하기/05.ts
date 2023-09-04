// tsConfig: {"noImplicitAny":true, "strictNullChecks":false}

// "strictNullChecks":false인 경우 number 타입의 변수에 null과 undefined가 정상적으로 할당되는 것을 볼 수 있다
// 엄격하게 타입 체크를 하지 않는 것을 확인 할 수 있다.

const x1: number = null; // OK, null is a valid number
const x2: number = undefined;
const x3: number = "3";
