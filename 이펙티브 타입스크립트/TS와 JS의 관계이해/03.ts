const states = [
  { name: "Alabama", capital: "Montgomery" },
  { name: "Alaska", capital: "Juneasu" },
  { name: "Arizona", capital: "Phoenix" },
  // ...
];

for (const state of states) {
  // 에러 발생 -> Property 'capitol' does not exist on type '{ name: string; capital: string; }'. Did you mean 'capital'?
  // console.log(state.capitol);
  console.log(state.capital);
}
