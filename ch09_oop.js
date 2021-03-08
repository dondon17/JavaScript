const SYM = Symbol();
const obj = {
    a:1,
    b:2,
    c:3,
    [SYM]: 4,
};

for(prop in obj){
    if(!obj.hasOwnProperty(prop)) continue;
    console.log(`${prop} : ${obj[prop]}`);
}

// Object.keys는 객체에서 나열 가능한 문자열 프로퍼티를 배열로 반환하는 역할 수행
Object.keys(obj).forEach(prop => console.log(`${prop} : ${obj[prop]}`))

const obj2 = {
    apple: 1,
    xochitl: 2,
    ballon: 3,
    guitar: 4,
    xylophone: 5,
};

// foreach는 객체의 프로퍼티들 마다 수행할 기능을 명시하는 메소드
Object.keys(obj2).filter(prop => prop.match(/^x/)).forEach(prop => console.log(`${prop}: ${obj2[prop]}`))


