// interface로 타입 명확히 하기

interface State {
  name: string;
  capital: string;
}

const states2: State[] = [
  { name: "Alabama", capital: "Montgomery" },
  /**
   * 에러발생
   * Type '{ name: string; capitol: string; }' is not assignable to type 'State'.
  Object literal may only specify known properties, but 'capitol' does not exist in type 'State'. Did you mean to write 'capital'?
   */
  // { name: "Alaska", capitol: "Juneasu" },
  { name: "Alaska", capital: "Juneasu" },
  { name: "Arizona", capital: "Phoenix" },
];

for (const state2 of states) {
  // 에러 발생 -> Property 'capitol' does not exist on type '{ name: string; capital: string; }'. Did you mean 'capital'?
  //   console.log(state2.capitol);
  console.log(state2.capital);
}
