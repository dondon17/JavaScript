// 변수와 상수
// 변수 : 변하는 값을 가질 수 있는 값

let current_temp = 36;       // let은 변수를 선언할 사용하는 키워드로, ES6에서 새로 생겼다.
var previous_temp = 33;      // 기존에는 var 키워드로 변수를 선언했다.

let traget_temp;             // 변수 선언 시, 반드시 초기화도 진행해야하는 것은 아니다. 선언만 할 시, undefined로 할당된다.
let age=25, name="kim", sex; // 이처럼 한 번의 let키워드 안에 여러 개의 변수를 선언 및, 초기화 할 수 있다.

// 상수 : 항상 동일한 값을 갖는 값
const ROOM_TEMP = 21, MAX_TEMP = 28; // const 키워드를 이용하며, 이렇게 선언될 경우 값은 변경할 수 없다.
                                     // 📍상수는 일반적으로 대문자로 표기하면 가독성이 높아진다.

//식별자 : 변수, 상수, 함수의 이름을 모두 통틀어 식별자라고 부른다.
/*
    예를 들어 위에서 current_temp, previous_temp, age, name, sex 등이 전부 식별자이다.

    📍 식별자는 글자, 숫자, $, _만 사용할 수 있음.(또한 숫자로 시작해서는 안됨)
    유니코드 문자도 사용할 수 있지만, 예약어로 지정된 단어들은 사용 불가(예, for, if, let, var, const 등)
    클래스를 제외한 식별자들은 대문자로 시작해서는 안되며, 특별한 경우가 아니면 _, __로 시작하는 식별자 이름은 자제할 것

    camel 표기법 : currentTemp, previousTemp
    snake 표기법 : current_temp, previout_temp 
*/

// 리터럴 : 변수를 초기화하는 값을 리터럴이라고 한다.
let room1 = "conference room";
let room2 = "dining room";

// 원시타입(primitive)과 객체(object)
/*
    원시타입 : 숫자 / 문자열 / boolean / null / undefined / symbol
    객체 : 음... 여러 형태와 값을 가질 수 있는 컨테이너 같은 느낌(class라고 생각하면 될듯)
    ex) Number라는 객체에는 중요한 숫자들에 대해선 상수로 정의하고 있음
*/
const MAX_NUM = Number.MAX_VALUE;
const MIN_NUM = Number.MIN_VALUE;
const NAN = Number.NaN;
const P_INF = Number.POSITIVE_INFINITY;
const N_INF = Number.NEGATIVE_INFINITY;

// 문자열 string : js에서는 유니코드를 사용하므로, 웬만하면 다 표현가능
/*
console.log("📍⛈~₩~");
console.log("line1\nline2");
console.log("line3\rline4");
console.log(`$backtick`);
console.log("\u2310(p\u22c0q)");
console.log("\xc9p\xe9e");
*/

// 문자열 템플릿
let v = 19 
const msg = `The current temp is ${v}`; // 문자열 템플릿 사용시에는 큰따옴표나 작음따옴표로 감싸는 것이 아니라 백틱(`)으로 감싼다
console.log(msg);

// Boolean - true, false
const TRUE = true;
const FALSE = false;

// Symbol - 유일한 토큰을 나타내기 위해 ES6에서 새로 도입한 데이터 타입(항상 유일하며, 다른 어떤 심볼과도 일치하지 않는다.)
const SYMBOL_A = Symbol("hello");
const SYMBOL_B = Symbol("hello");
console.log(SYMBOL_A===SYMBOL_B) // false 출력 -> 어떻게 보면 서로 다른 인스턴스라고 보면 된다.


// null과 undefined
let var_undefined; // 암시적으로 undefined로 초기화됨
console.log(var_undefined);

const VAR_NULL = null; // 명시적으로 null값으로 초기화
console.log(VAR_NULL);

// 객체 : 원시타입으로 선언된 변수들은 하나의 값만을 저장할 수 있지만, 객체의 경우 여러가지 타입의 데이터들을 저장할 수 있다.
// 즉, 다양한 값들을 담고 있는 컨테이너라고 볼 수 있다. 
const obj = {};
obj.color = "Red";
obj.sex = "male";
console.log(obj.color, obj["sex"], obj);

const myInfo = {
    name: "kim",
    sex: "male",
    age: 25,
    spec: {
        univ: "ajou",
        dept: "cyber security",
        grade: 4
    },
    tostring: function(){
        return console.log("myname is "+this.name+" and "+this.age);
    }
}
console.log(myInfo.tostring()); // 객체 안에는 함수도 올 수 있음 -> 클래스와 완전히 동일
delete myInfo.tostring; // 객체의 property 삭제 - delete
console.log(myInfo);

// 배열
const arr0 = [];
const arr1 = [1,2,3,4];
const arr2 = [null, 1, "two"]; // 다양한 데이터 타입의 변수들을 하나의 배열에 넣을 수 있음
const arr3 = [ // 객체들을 배열에 넣을 수도 있음
    {name:"kim", age:"15"},
    {name:"lee", age:"10"},
    {name:"choi", age:"25"},
];
const arr4 = [
    [1,2,3], // 2차원 배열
    [null, "one", 2],
];

// 날짜 객체 - Date()
const now = new Date();
console.log(now);

// 정규 표현식
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/; // 정규표현식은 그냥 변수의 포맷을 정의한다고 보면된다.
console.log(email);

// Map/WeakMap & Set/WeakSet
// ES6에서 새롭게 도입된 데이터 타입이다.
// Map은 키와 값을 서로 연결한다는 점에서 객체와 비슷하며,
// Set은 배열과 비슷하지만, 중복 데이터를 허용하지 않는다는 특징이 있다.
// WeakMap/Set은 성능 향상을 위해 일부 기능을 제거한 버전이다.

// 데이터 타입 변환
// 숫자로 변환 - 숫자로 변환할 수 없는 경우에는 NaN이 리턴된다.
const numStr = "33"
const num = Number(numStr);
const a = parseInt("16 ages", 10) // 16을 제외한 문자열은 제거되고, 10진수 16으로 초기화
const b = parseInt("3a", 16) // 16진수 3a를 10진수로 변환 -> 16*3+1*10 = 58로 초기화
const c = parseFloat("15.12 Mph"); // 뒤에 기수(8,10,16)이 명시되지 않은 경우, default는 10진수로 지정되며, 15.12로 초기화

const d = new Date();
const e = d.valueOf(); // UTC 1970.01.01 자정을 기준으로 현재까지 몇 밀리초가 지났는지를 출력
console.log(d, e);
const f = TRUE ? 1 : 0; // 값이 true면 1, 아니면 0을 반환 - 삼항연산자

// 문자열로 변환
const n = 33.5
const numstr = num.toString();
console.log(num, numstr);
const arrstr = arr1.toString();
console.log(arr1, arrstr);


function rand(n, m) {
    return m + Math.floor((n-m+1)*Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spin", "hello"][rand(0,5)];
}
console.log(randFace())