// tsConfig: {"noImplicitAny":false, "strictNullChecks":false}
// noImplicitAny -> 암묵적인 Any타입 허용할지 말지 설정하는 값
// strictNullChecks -> NullCheck를 엄격히 할 지 말지 설정하는 값

// noImplicitAny":false 일 때는 에러가 나지 않는다, 마치 순수 자바스크립트 코드처럼 보인다
function add(a, b) {
  return a + b;
}
add(10, null);
