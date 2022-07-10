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
add(10,20,30,40)// 두개의 불필요한 인자가 있어 오류가뜸 2개필요한데 1개만 넣어도 마찬가지
// 타입스크립트 함수 선언 - 함수의 반환 타입
// function add(a: number, b: number): number {
//   return a + b;
// }

// function add(a: number, b: number): string {
//   return a + b;
// }

// 함수 인자
function log(a: string) {
  console.log(a);
}
log('a', 10);
//

// 함수 옵셔널 파라미터(optional parameter)
function printText(text: string, type?: string) {
  console.log(text);
}
printText('hi');
//?를 넣음으로써 확정적으로 넣질않는다 라는 옵셔널 파라미터
//옵셔널 체이닝 한번찾아볼것