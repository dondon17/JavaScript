// if문, while/for문은 다른 프로그래밍 언어와 동일하다.

// 특이한 for문
/*
for(let tmp, i=0, j=1; j < 30; tmp = i, i = j, j = i+tmp){
    console.log(i)
}
*/
// for문의 초기화 부분에는 변수 하나만을 넣을 수 있는 것이 아니라, 여러 변수를 초기화시킬 수 있다.

/*
for(;;){
    console.log("this is infinity roop")
}
 */
// for문 안에 제어부(조건문)을 넣지 않으면, 무한루프로 만들 수 있다.

const obj = {
    name: "kim",
    age: 25,
    sex: "male",
    spec: {
        univ: "ajou univ",
        dept: "cyber security",
        grade: 4,
    },
}

for(let prop in obj){
    if(!obj.hasOwnProperty(prop)) continue; // 지금 예제에서는 굳이 호출할 필요는 없지만, 후에 생략할 경우 에러가 발생할 가능성이 있으므로 추가
    console.log(prop)
} 