// tsConfig: {"noImplicitAny":true, "strictNullChecks":true}

const el = document.getElementById("status");
el.textContent = "Ready";
// ~~~ Object is possibly 'null'

if (el) {
  el.textContent = "Ready"; // OK, null has been excluded
}

el!.textContent = "Ready"; // OK, we've asserted that el is non-null

/**
 * 요약
  1. 타입스크립트 컴파일러는 매우 많은 설정을 가지고 있다.
  2. 암시적 any 타입을 피하기 위해 noImplicitAny 설정을 고려하자. 사실상 필수다.
  3. 엄격한 타입 체크를 원한다면 strict 설정을 고려하자. 사실상 필수다.
 */
