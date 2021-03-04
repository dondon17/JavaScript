// 다른 프로그래밍 언어에서 사용하는 연산자와 동일하다.
// 산술 연산자, 비교 연산자 등등

// ===(동등함)과 ==(대소 비교)
/*
    두 값이 같은 객체를 가리키거나,
    두 값이 같은 데이터 타입이고, 값도 같은 경우

    📍 서로 다른 객체는 항상 불일치하다
    📍 값을 비교할 때는 ==을, 객체 등을 비교할 때는 ===을 추천한다
*/
function func(){};
console.log(typeof(Number.MAX_VALUE));
console.log(typeof("werwer"))
console.log(typeof({}));
console.log(typeof(func()));

let v1 ,v2;
v1 = v2 = 10 // 변수 초기화 순서 : v2=10 할당 후, v1=10으로 초기화됨

const arr = [1, 3, 9, 7, 10, 8];
let i = 0, n;
while((n=arr[i]) < 10 && i++ < arr.length){
    console.log(`배열에서 10보다 작은 수 #${i} : ${n}`);
}

const obj = {
    a: "this is a prop",
    b: 66,
    c: "clear"
}

// 객체 해체  -> 객체의 각각의 프로퍼티들을 변수에 할당
// 이 떄, 변수명과 프로퍼티 명이 동일해야 가능
const {a,b,c} = obj;
console.log(a,b,c)

// 배열 해체도 가능 -> 객체 해체와 다르게, 배열의 요소들을 저장할 변수 이름은 아무거나 해도 상관없음
const arr2 = [1,null, "three"];
let [x,y,z] = arr2;
console.log(x,y,z)

// 간단한 싱글 if문을 삼항 연산자로 바꾸기
/*
if(prime(n)){
    label = "prime";
} else{
    label = "non-prime"
}

label = prime(n) ? "prime" : "non-prime"
*/

// 초기화(할당)이 주 목적인 if문의 경우 다음과 같이 or로 간단하게 표현 가능
/*
if(!opt) opt = {} 

opt = opt || {}
*/