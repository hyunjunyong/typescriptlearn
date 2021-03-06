function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수
// 꼭 T 일필요는없음 변수명 중에 하나임

function getValue<T>(value: T): T {
  return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();

// 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };

// 제네릭 타입 제한 - 구체적인 타입
// function getNumberAndArray<T>(value: T): T {
//   value.length; // X
//   return value;
// }

function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O
  return value;
}

//제네릭 타입 제한 2 - 정의된 타입 이용하기

interface LengthType{
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T{
  text.length;
  return text;
}

logTextLength('a');

// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}

//extends interface를 통해 shoppingitem중 하나 타입만 선언가능
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
}

getAllowedOptions('address');

// getAllowedOptions('nothing');
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name

//기본적으로 제네릭 선언 방법
interface Dropdown<T>{
  value: T;
  selected: boolean;
}
const obj: Dropdown<string> = {value: 'abc', selected: false};

