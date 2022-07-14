// function logMessage(value: string) {
//   console.log(value);
// }
// function logMessage(value: number) {
//   console.log(value);
// }
// function logMessage(value: any) {
//   console.log(value);
// }

// # Union 타입 문법 - `any` 보다는 명시적임
// 그동안 하나만 선언할 수 있던것과 달리 union타입은 여러개 타입을 선언가능

var seho: string | number |boolean;
// function logMessage(value: string | number) {
//   console.log(value);
// }

//string| number 이므로 헬로,3 모두 no error
logMessage('hello')
logMessage(3);

function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  // someone.name; // O
  // someone.age; // X
}

// function askSomeone(someone: Developer & Person) {
//   someone.name; // O
//   someone.age; // O
// }

//인터셉션은 and 둘다 호출하는거임, union이 더 자주쓰임

askSomeone({name: '디벨로퍼',skill: '웹 개발'});
askSomeone({name: '캡틴',age:100});