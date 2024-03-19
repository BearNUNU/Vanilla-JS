/**
 * Hoisting
 *
 */
console.log("hello")
console.log("world")

console.log(name) //undefined가 찍힘. 즉 값이 할당되어있지 않다는 뜻
var name = "김건우"
console.log(name)

// var name;
// console.log('name');
// name = "김건우"
// console.log(name);위의 과정을 풀어서 쓰면 이런 느낌이다.

/**
 * Hoisting이란 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * let과 const도 호이스팅이 된다.
 */

console.log(name2)
let name2 = "wow"
// ReferenceError: Cannot access 'name2' before initialization 라는 오류가 발생

console.log(name3)
// let name3 = "wow2"
// ReferenceError: name3 is not defined

//var는 변수 선언 단계에서 선언 시, undefined로 변수를 초기화 하지만 let const는 호이스팅 시 변수를 초기화 하지 않는다.
