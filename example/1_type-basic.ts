// 문자열 
// 하단은 js 기준
const str: string = 'hello';
//const str = 'hello';

// 숫자
const num: number = 10;
// const num = 10;

// 배열
const arr: Array<string> = [];
arr.push('hi');
// const arr = [];
// arr.push('hi');

// 배열 - 리터럴 적용
const items: string[] = [];
// items.push(10);
// const items = [];
// items.push(10);

// 튜플
const address: [string, number] = ['판교', 40];
// const address = ['판교', 40];

// 객체
const obj: object = {};
// obj.a = 10;
// const obj = {};
// obj.a = 10;

// 타입 객체
const person: { age: number; name: string } = { age: 100, name: 'Capt' };
person.age = 101;
// const person = { age: 100, name: 'Capt' };
// person.age = 101;

// 진위값
let isLogin: boolean = false;
// let isLogin = false;