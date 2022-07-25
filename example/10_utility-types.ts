//타입 단언
var a;
a = 10;
a ='a'
var b = a as string;
//DOM API 사용

//타입 단언 예제
var div = document.querySelector('div')
div.innerHTML

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

let products: Product[] = [
  { id: 1, name: '참치김밥', price: 3000, brand: '김가네', stock: 3 },
];

function displayProduct(productInfo: { id: 1; name: '참치김밥'; price: 3000 }) {
  // ...
}

// #1 - Partial
type Subset<T> = {
  [K in keyof T]?: T[K];
};

const productDetail: Product = {
  id: 1,
};

// #2 - Pick
type PickFewThings<T, K extends keyof T> = {
  [P in K]: T[P];
}

const productName: PickFewThings<Product, 'name'> = {

}
const productNameWithPrice: PickFewThings<Product, 'name' | 'price'> = {
  
}