/**
 * Operater
 * 연산자
 */

/**
 * +
 * -
 * *
 * / 나눗셈
 * % 나머지
 *
 */

/**
 * 증가와 감소
 * ++
 * --
 */

/**
 * 연산자의 위치
 */
let number = 1
let result = 1
console.log(result)

result = number++
console.log(result, number)
// result가 1이 나오는 이유는 number값을 먼저 받고 연산자가 실행된것

let result2 = 1
result2 = ++number
console.log(result, number)

/**
 * 할당 연산자
 *
 * +=
 * -=
 * *=
 * /=
 */

/**
 * 비교 연산자
 *
 * 1.) 값의 비교  == !=
 * 2.) 값과 타입의 비교 === !==
 */

/**
 * 대소관계 비교 연산자
 * >
 * <
 * >=
 * <=
 */

/**
 * 삼항 조건 연산자
 *
 */
console.log(10 > 0 ? "10이 0보다 크다" : "0이 10보다 크다") //왼쪽이 true 일 때, 오른쪽은 false

/**
 * 논리 연산자
 * && 그리고 둘 다 true여야 true를 반환
 * || 또는  둘 중 하나만 true여도 true를 반환, 둘 다 false면 false
 */

/**
 * 단축 평가(short circuit evaluation
 *
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */

/**지수연산자
 *
 *  **
 *
 */
console.log(10 ** 10) //10의 10승

/**
 * nul 연산자
 */

let name
console.log(nmae)

name = name ?? "코드팩토리"
console.log(name)
//name이 null이면 코드팩토리를 넣어라

let name2
name2 ??= "코드팩토리"
