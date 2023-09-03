const names = ["Alice", "Bob"];
/**
 * 에러 발생 -> Cannot read property 'toUpperCase' of undefined
 * 에러 발생 하지만 타입스크립트가 에러를 발견 못함

 * 타입스크립트는 정적 타입 검사 시 해당 인덱스가 배열 범위를 벗어날 가능성이 있음을 감지하지 못한다
 * 따라서 이러한 종류의 에러는 런타임에만 발생하며, 타입스크립트는 이를 컴파일 시간에 감지하지 못한다
 * 
 * 이러한 에러를 방지하려면 배열 인덱스에 접근하기 전에 항상 해당 인덱스가 유효한지 확인해야 한다
 * 
 */

console.log(names[2].toUpperCase());
