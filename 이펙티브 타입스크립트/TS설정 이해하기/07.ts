// tsConfig: {"noImplicitAny":true, "strictNullChecks":true}

// "strictNullChecks":true 인 경우 엄격히 타입 체크를 하는 것을 확인할 수 있다
// 이 옵션을 true로 설정했을 경우, 코드를 작성하면서 null체크 혹은 단언 문을 추가해야 하는 경우가 많아지지만 런타임에서 오류가 나는 것을 방지해주는 좋은 설정이다.

const x1: number = null; // OK, null is a valid number
const x2: number = undefined;
const x3: number = "3";
