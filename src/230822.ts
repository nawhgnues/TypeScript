//Recap generic (타입의 변수화)
function getText<Type>(text: Type): Type {
  return text;
}

getText<string>("hi");
getText<number>(10);
getText<boolean>(true);

// 인수들을 받아서 배열로 만들어주는 메소드
function toArray<T>(a: T, b: T): T[] {
  return [a, b];
}

toArray<number>(1, 2); // 숫자형 배열
toArray<string>("1", "2"); // 문자형 배열
toArray<string | number>(1, "2"); // 혼합 배열

// 제네릭 인터페이스
interface Mobile<T> {
  name: string;
  price: number;
  option: T; // 제네릭 타입 - option 속성에는 다양한 데이터 자료가 들어온다고 가정
}

// 제네릭 자체에 리터럴 객테 타입도 할당 할 수 있다.
const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: { color: "read", coupon: false }, // 제네릭 타입의 의해서 option 속성이 유연하게 타입이 할당됨
};

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good", // 제네릭 타입의 의해서 option 속성이 유연하게 타입이 할당됨
};

// 제네릭 타입 앨리어스
type TG<T> = T[] | T;

const number_arr: TG<number> = [1, 2, 3, 4, 5];
const number_arr2: TG<number> = 12345;

const string_arr: TG<string> = ["1", "2", "3", "4", "5"];
const string_arr2: TG<string> = "12345";

// 타입 종류 제한
type numOrStr = number | string;

// 제네릭에 적용될 타입에 number | string 만 허용
function identity<T extends numOrStr>(p1: T): T {
  return p1;
}

identity(1);
identity("a");

identity(true); //! ERROR
identity([]); //! ERROR
identity({}); //! ERROR
