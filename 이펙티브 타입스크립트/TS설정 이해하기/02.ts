// tsConfig: {"noImplicitAny":true, "strictNullChecks":false}

// noImplicitAny":true 일 때는 파라미터인 a, b부분에 에러가 난다
// 파라미터인 a, b가 암묵적으로 any타입을 가지고 있기 때문이다

// noImplicitAny는 암묵적으로 any 타입을 가지는 것을 허락하지 않는다
// any타입은 타입 체커를 무력화하기 때문에 사용을 지양해야 한다

// noImplicitAny를 false로 설정해야 하는 경우는 기존 자바스크립트 프로젝트를 타입스크립트로 마이그레이션하는 경우이다
// 해당 경우를 제외한다면, 가능한 noImplicitAny 옵션을 true로 설정하는 것이 좋다
function add(a, b) {
  return a + b;
}
add(10, null);
