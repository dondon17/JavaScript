function sayHello() {
    console.log("hi");
    console.log("hello");
    return "sayhello called";
}

const obj = {};
obj.func = sayHello; // 이와 같이 함수를 객체의 프로퍼티에 할당시킬 수도 있다.
sayHello();
obj.func();

const arr = [null];
arr[0] = sayHello;
arr[0](); // 이왁같이 배열의 요소에도 할당할 수 있는데, 호출시에는 이렇게 배열의 요소 인덱스 다음에 괄호를 쳐줘야됨
          // 파라미터 필요시 파라미터도 입력해야됨
          // 자바스크립트에서는 마지막에 괄호를 붙히면 함수로 인지하게 되며, 해당 함수를 호출하게 된다.
          // 단, 아무곳에나 괄호를 붙힌다고 함수가 되는 것이 아닌, 존재하는 함수에 한해서만 동작한다.


function f(x) {
    x.message = "changed in function f" // 이렇게 변경 시 객체의 주소에 있는 값을 변경하므로, 함수 실행 전과 후의 msg값이 다름

    // 아래의 경우 함수에서만 값을 변경하게 됨
    // x = {
    //     message: "changed",
    // }
}

let o = {
    message: "origin msg",
}
console.log(o.message);
f(o);
console.log(o.message);

function f2(params) {
    return `in f2 : params = ${params}`
}
console.log(f2()) // 매개변수가 필요한 함수를 매개변수 없이 호출하면, 매개변수에 undefined가 할당됨


// 이전에 객체를 각 변수로 해체했던 것처럼, 매개변수의 이름이 객체의 프로퍼티들과 같다면, 아래와같이 해체가 가능
function f3({name, sex, age}) {
    return `my info : ${name}, ${sex}, ${age}`;    
}

const me = {
    name: "kim",
    sex: "male",
    age: 25,
}

console.log(f3(me));



// 매개변수 기본값 지정
function f4(a, b="default param b", c=0) {
    return `return val : ${a}, ${b}, ${c}`;
}

console.log(f4());
console.log(f4(10, 20, 30));
console.log(f4(10, 20));
console.log(f4(10));
console.log(f4("park", "lee"));


// 객체의 프로퍼티로서의 함수
const ex = {
    name : "kim",
    f: function () {
        return `hi ${this.name}, this is function 'f' in object 'ex'`;
    }
}
console.log(ex.f())

const ex2 = ex.f;
console.log(ex2()) // ex객체의 함수만 할당했으므로, this.name이 할당되지 않았기 때문에 undefined가 할당됨