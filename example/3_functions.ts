// 자바스크립트 함수 선언
function sum(a, b) {
  return a + b;
}
sum(1,3)
//vscode에서 볼수 있듯이 암묵적으로는 선언 안하면 any로 되고 선언을 하게해줄수있음

// 타입스크립트 함수 선언 - 함수의 매개 변수
function add(a: number, b: number) {
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 반환 타입
function add(a: number, b: number): number {
  return a + b;
}

// function add(a: number, b: number): string {
//   return a + b;
// }

// 함수 인자
function log(a: string) {
  console.log(a);
}
log('a', 10);

// 함수 옵셔널 파라미터(optional parameter)
function printText(text: string, type?: string) {
  console.log(text);
}
printText('hi');
