 // scope란 값들이 유효한 범위를 의미한다.
 // 전역변수의 scope는 코드 전체이고, 지역변수의 scope는 해당 변수가 위치한 블록 내부이다.
 console.log("before block..");
 {
     console.log("inside block");
     const a = 3;
     console.log(a)
} 
// console.log(a) 오류 발생 - 변수 a는 블록 안에서만 존재하기 떄문

{
    // #블록 1
    const a = "blue";
    console.log(a);
}
{
    // #블록 2
    const a = "two"; // 블록 1과 블록 2는 전혀 다른 공간이다. 따라서 동일한 이름의 상수를 생성할 수 있다.
    console.log(a);
}
// console.log(a) 오류 발생 - 상수 a는 각각의 블록에서만 존재하므로

{
    let a = "blue";
    console.log(a);
    // 블록 내부에 다른 블록이 존재할 수 있는데, 변수의 유효범위는 다른 경우들과 동일하다.
    {
        let a = 3;
        console.log(a);
    }
    console.log(a)
}

let f;
{
    let o = {note: 'safe'};
    f = () => o;
}
let oRef = f();
oRef.note = "test";
console.log(oRef);


// 함수 선언 및 즉시 호출하는 표현식
/*
    (function(){
        statement...
    })();
    마지막에 ()를 붙혀줌으로써, 함수를 선언하자마자 바로 호출해버린다.
*/

const msg = (function(){
    const a = "print a";
    return `${a}, ${a.length}`;
})();
console.log(msg);


// let과 var의 차이
// var는 es6에서 let이 도입되기 전에, 변수를 선언할 때 사용했던 키워드이다.
// 둘의 가장 큰 차이점은, 변수 선언 전후에 사용할 수 있느냐와, 사용 범위에 있다.
// let으로 변수를 선언하면, 해당 변수는 선언되기 전까지는 존재하지 않던 변수이다.
// var로 변수를 선언한 경우, 현재 스코프 안이라면 어디서든지 사용할 수 있으며, 심지어 선언되기 이전에도 사용될 수 있다.
  
let var1;
let var2 = undefined;
console.log(var1, var2)
// console.log(var1, var2, var3) 오류 발생 - var3는 선언된 적이 없기 떄문

// var로 변수를 선언할 경우(참고로 let이나 var키워드 없이도 변수를 선언할 수는 있다)
x;
console.log(x);
var x = 3;
console.log(x);

// 그 이유는 바로 hoisting 떄문인데, 호이스팅이란, 자바스크립트에서 알아서 실행 순서를 변경한 것이다.
// 즉, var x; 코드가 x; 이전에 암시적으로 삽입되어 실행된 것이다.
// 또한 var의 경우, 동일한 이름을 가진 변수를 매번 var 키워드를 붙혀서 초기화해도, 이를 무시한다. 

// strict 모드 - 엄격한 모드 즉, 암시적으로 생성된 전역변수(var 또는 let 키워드 없이 변수명으로만 생성된 변수)를 허용하지 않는 것
// 사용법 : 전역 스코프에서 use strict를 입력해 놓으면, 코드 전체가 스트릭트 모드로 동작하게 됨.
// 즉, 어떤 스코프에 use strict를 작성하느냐에 따라서 스트릭트 모드가 적용되는 범위를 정할 수 있음.

function strict_func() {
    'use strict'; // 해당 함수를 스트릭트 모드로 설정
}

