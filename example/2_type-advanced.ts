// 이넘(Enum)
// enum Shoes{//숫자형 이넘
//   Nike, //Shoes.Nike =0 Shoes.Adidas = 1, Shoes.Sth = 2; 초기화를 하지 않을 시에 예시
//   Adidas,
//   Sth,
// }

enum Shoes{//문자형 이넘
  Nike='나이키', 
  Adidas='아디다시',
}

var myShoes = Shoes.Nike;
console.log(myShoes);

enum Answer{
  Yes= 'Y',
  NO = 'N',
}

function askQuestion(answer: Answer){
  if(answer === Answer.Yes){
    console.log('정답입니다.')
  }
  if(answer === Answer.NO){
    console.log('오답입니다.')
  }
}
askQuestion('예스');


enum Avengers {
  Capt,
  Ironman,
  Hulk,
}
const myHero = Avengers.Capt;

// any
let a: any = 'hi';
a = 20;
a = false;

// void
function sayHi(): void {
  // return 'a';
}

// 타입 추정 (type assertion)
let str = '이건 문자열 타입이 됩니다.';

let num: number;
num = 'str' as any;

const divElement = document.querySelector('#app');
divElement.innerHTML;
// const empty = document.querySelector('#app') as null;
// empty.innerHTML;
