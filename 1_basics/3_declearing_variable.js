/**
 * 변수 선언하기
 *
 *
 * 1.) var - 더이상 사용x
 * 2.) let -
 * 3.) const -
 */

var name = "김건우 자바스크립트 연습"
console.log(name)

var age = 100
console.log(age)

let ive = "아이브"
console.log(ive)

/**
 * var과 let으로 선언을 하면 값을 추후에 변경이 가능하다.
 */
ive = "안유진"
console.log(ive)

const newjeans = "뉴진스"
console.log(newjeans)
// newjeans = "디토" const의 경우 선언 이후에 수정 불가능

/**
 * 선언과 할당
 * (이후에 추가적으로)
 *
 * 1.) 선언은 변수를 선언하는 것.
 * 2.) 할당은 선언한 변수안에 값을 넣어주는것.
 */
var name2
name2 = "김건우"

let girlfriend
console.log(girlfriend)
//선언 후 할당하지 않으면 undefined 값이 주어진다.
//단 const는 선언과 할당을 같이 해야 한다 -> 이후에 재할당이 불가능하기 때문에 처음에 할당을 하지않으면 undefined값에서 변경이 불가능하기 때문에
