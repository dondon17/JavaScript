/*
 * 📍 배열 기본 
 * 객체와 다르게 순서가 존재하는 데이터 저장공간
 * 여러 타입의 데이터들이 하나의 배열에 존재할 수 있음
 * 배열은 객체의 한 종류이므로, 프로퍼티가 존재
 * 대표적인 프로퍼티로 배열의 길이를 나타내는 length가 존재
 * 배열에 배열의 길이보다 긴 인덱스를 이용해 요소를 할당하면, 자동으로 해당 인덱스에 맞게 배열의 길이가 늘어나며, 빈 공간은 undefined로 할당됨
 * Array생성자를 이용해 배열을 만들 수도 있지만, 굳이 이렇게 만들 필요는 없음 -> 간단하게 arr = []와 같이 만드는게 더 편리
 */

const arr = new Array();            // 빈 배열 생성
const arr1 = new Array(3);          // 길이가 3인 배열 생성(매개변수가 하나이고, 0 이상의 정수인 경우 생성할 배열의 길이로 인식)
const arr2 = new Array(1,2,3);      // [1,2,3] 배열로 생성
const arr3 = new Array("hello");    // hello를 요소로 갖는 배열 생성
const arr4 = [
    {name: "kim", sex: "male", age: 25,},
    {univ: "ajou", dept: "cs", grade: 4,},
    {height: 178, weight: 75,},
]
const arr5 = [1,2,3];
arr5[5] = 5;

// console.log(arr, arr1, arr2, arr3, arr4, arr5)

// 배열에 시작/끝에 요소 추가 및 삭제 - push / pop / unshift / shift
const arr6 = [1,2,3];
arr6.push(4)        // 마지막 인덱스 뒤에 요소 추가
console.log(arr6)
arr6.pop()          // 마지막 인덱스의 요소 제거
console.log(arr6)
arr6.unshift(0)     // 첫번째 인덱스 앞에 요소 추가(여러개 추가 가능)
console.log(arr6)
arr6.shift()        // 첫번째 인덱스의 요소 제거
console.log(arr6)


// 배열의 끝에 여러 요소 추가
arr7 = arr6.concat(4,5);    // arr6에 4,5를 추가한 배열을 반환 -> 기존의 arr6는 변함이 없음!!!!!!!!
console.log(arr7);

arr8 = arr7.concat(6,7,8,9,10);
console.log(arr8);


// 배열의 일부분 가져오기 - slice(s, e) arr[s] ~ arr[e-1]를 가져옴
// 기본적으로 두개의 매개변수를 받는데, 하나는 시작 인덱스, 두번째는 끝 인덱스이다.
// 일반적으로, 하나의 매개변수만 사용할 경우, 해당 위치부터 마지막까지를 의미한다.
const arr9 = [1,2,3,4,5,6];
console.log(arr9.slice(3, 4))   // arr9[3] 만을 가져옴 
console.log(arr9.slice(-2))     // 뒤에서 2번째부터 마지막까지 출력 -> -1이라면 마지막 인덱스의 요소 출력 즉, 음수 매개변수는 마지막 인덱스를 기준으로 한다.


// 배열의 임의의 위치에 요소 추가 및 제거 - splice(i, n, ...e) : 배열에서 제거할 부분의 시작 인덱스 i, 제거할 요소의 개수 n, 추가할 요소들 e
const arr10 = [1,5,7];
arr10.splice(1, 2); // arr[1]부터 2개의 요소 제거 / 추가하는 요소는 없음
console.log(arr10);

arr10.splice(1, 0, 2, 3, 4); // arr[1]부터 0개 요소 제거 = 제거할 요소 없음 / 추가하는 요소 : 2, 3, 4
console.log(arr10);


// 배열 안에서 요소 교체하기 - copyWithin(i, j, k)
// 배열의 요소를 복사해서 다른 위치에 붙여넣고, 기존의 요소를 덮어쓰는 기능
// 첫번째 매개변수 i : 복사한 요소를 붙여넣을 위치
// 두번째 매개변수 j : 복사할 시작 위치
// 세번째 매개변수 k : 복사를 끝낼 위치(생략 가능) - 생략한 경우 복사할 시작 위치부터 끝까지를 복사

const arr11 = [1, 2, 3, 4];
arr11.copyWithin(1, 2)
console.log(arr11) // 1344

arr11.copyWithin(2, 0, 2)
console.log(arr11) // 1313

// 배열 정렬
const arr12 = [1,2,9,4,8];
console.log(arr12.reverse()); // 크기 순으로 정렬하는 것이 아니라, 인덱스의 역순으로 정렬
console.log(arr12.sort()); // 크기 순으로 정렬

// 배열 검색
const obj = {name : "kim",};
const arr13 = [1, "two", obj, undefined];
console.log(arr13.indexOf(obj));    // 배열에 존재하는 요소의 인덱스를 반환 
console.log(arr13.lastIndexOf(1));  // 배열의 끝에서부터 해당 요소를 검색 - 즉, 만약 동이한 요소가 두개라면, 뒤에 있는 요소가 반환됨

const arr14 = [
    {id: 5},
    {id: 1},
];
console.log(arr14.findIndex(obj => obj.id===1)) // 객체의 id 프로퍼티가 1인 객체의 인덱스 반환
console.log(arr14.find(obj => obj.id === 10)) // id 프로퍼티가 10인 객체가 없으므로 undefined 반환


// some : 배열의 요소를 탐색하면서, 조건에 부합하는 요소가 있으면 true를 즉시 반환하고, 
// 배열의 끝까지 조건에 부합한 요소가 없을 경우 false를 반환하는 메소드
const arr15 = [5, 7, 10, 13, 17];
console.log(arr15.some(x => x%2 === 0));
console.log(arr15.some(x => Number.isInteger(Math.sqrt(x))));

// every : some 메소드는 조건에 맞는 요소가 하나라도 있으면 true를 반환한다면,
// every 메소드는 모든 요소가 조건을 만족할 경우에만 true 반환
// 즉, 하나라도 조건을 만족하지 못하는 요소가 있다면 false를 반환
console.log(arr15.every(x => x%1===0))



// map 과 filter
// map : 배열의 요소를 변형하는 메소드로 무엇이든지 변형 가능.
const cart = [
    {
        name: "kia",
        price: 1000,
    },
    {
        name: "benz",
        price: 3000,
    },
]


// 객체들로 이루어진 배열에서 map 메소드를 이용해 각 객체의 동일한 프로퍼티끼리 배열을 생성하였음
// 새로 생성된 배열(가격 배열)에서도 각 가격의 할인된 가격으로 새로운 가격배열을 생성함
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discounted = prices.map(x => x*0.8)
console.log(names)
console.log(prices)
console.log(discounted)

// 반대로, 각기 다른 배열들의 요소를 하나의 객체로 묶어서 변환시킬 수도 있음
const items = ["oneitem", "twoitem"];
const price2 = [9.9, 8.4];
const cart2 = items.map((x,i) => ({name: x, price: price2[i]})); 
console.log(cart2);


// filters : 배열에서 필요한 것들만 남길 목적으로 사용하는 메소드
const cards = [];
for(let suit of ['h', 'c', 'd', 's']){
    for(let value = 1; value<=13; value++){
        cards.push({suit, value})
    }
}
console.log(cards);

newdeck = cards.filter(c => c.value === 2); // 기존의 cards 배열은 그대로 유지되지만, filter 메소드로 반환된 배열은 조건이 적용된 배열이다
console.log(newdeck);
console.log(cards);


// map과 filter의 혼합 예제
function cardToStr(c){
    const suits = {'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
    const values = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'};
    for(let i = 2; i <= 10; i++)
        values[i] = i;

    return values[c.value]+suits[c.suit];
}; 

console.log(cards.filter(c => c.value === 2).map(cardToStr));


// reduce
const ex = [1]
while(ex.length!=5){
    let e = ex.reduce((a,x)=>a+=x);
    ex.push(e)

}
console.log(ex)