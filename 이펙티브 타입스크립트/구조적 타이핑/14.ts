interface PostgresDB {
  runQuery: (sql: string) => any[];
}

interface Author {
  first: string;
  last: string;
}

interface DB {
  runQuery: (sql: string) => any[];
}

function getAuthors(database: DB): Author[] {
  const authorRows = database.runQuery("SELECT FIRST, LAST FROM AUTHORS");
  return authorRows.map((row) => ({
    first: row[0],
    last: row[1],
  }));
}

test("getAuthors", () => {
  const authors = getAuthors({
    runQuery(sql: string) {
      return [
        ["Toni", "Morrison"],
        ["Maya", "Angelou"],
      ];
    },
  });
});

expect(authors).toEqual([
  { first: "Toni", last: "Morrison" },
  { first: "Maya", last: "Angelou" },
]);

// 요약
// 자바스크립트는 본질적으로 덕 타이핑 기반이다.
// 자바스크립트의 런타임 동작 모델링한 타입스크립트 또한 덕 타이핑을 기반으로 한다.
// 덕 타이핑을 제대로 이해하고 활용하자.

interface Person {
  name: string;
  age: number;
}

function sayHi(person: Person) {
  return `Hello, I am ${person.name}. I am ${person.age}`;
}

const me: Person = {
  name: "Kim",
  age: 100,
};

console.log(sayHi(me)); // Hello, I am Kim. I am 100

interface Monkey {
  name: string;
  age: number;
  favorite: "banana" | "watermelon" | "hamburger";
}

const monkey: Monkey = {
  name: "KimMonkey",
  age: 101,
  favorite: "hamburger",
};

console.log(sayHi(monkey)); // Hello, I am KimMonkey, I am 101

/**
 * Monkey 타입에는 3가지 속성이 있다. 그 중 name과 age는 Person에도 존재한다.
 * Person의 속성을 Monkey가 모두 가지고 있다.
 *
 * 때문에 덕 타이핑으로 인해  sayHi 함수에 인자로써 넣을 수 있었다.
 */
