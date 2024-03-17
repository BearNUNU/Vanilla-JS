/**
 * Data types
 *
 * 자바스크립트에는 여섯개의 Primitive Type과 한개의 오브젝트 타입이 있다.
 *
 * Primitive Type
 * 1.) Number (숫자)
 * 2.) String (문자열)
 * 3.) Boolean (불리언)
 * 4.) undefined
 * 5.) null
 * 6.) Symbol
 *
 * 오브젝트 타입
 * 7.) Object (객체)
 * Function
 * Array
 * Object
 */

// 1.) Number (숫자)
const age = 100
const tem = -10
const pi = 3.13
console.log(typeof age)
console.log(typeof tem)
console.log(typeof pi)

const infinity = Infinity
const nInfinity = -Infinity
console.log(typeof infinity)
console.log(typeof nInfinity)

// 2.) String (문자열)
const code = "code"
console.log(typeof code)

const ive = "'아이브' 안유진"
console.log(ive)

/**
 * Templage Literal
 *
 * Escaping Character
 * 1.) newline -> \n
 * 2.) tab -> \t
 * 3.) 백슬래시를 스트링으로 표현하려면 두번 입력
 */

const a = "hahahah\nhahahaha"
const b = "hohoho\thohohoo"
const c = "huhuhu\\huhuhu"
console.log(a)
console.log(b)
console.log(c)

//위의 방법들이 불편해서 만들어진 Templage Literal
const aKim = `this is very 
good`
console.log(aKim)
console.log(typeof aKim)

/**
 * Undefined
 * 사용자가 직접 값을 초기화하지 않았을때 지정되는 값
 *
 * 이렇게 지정되는건 지양해야함
 */
let noInit
console.log(noInit)
console.log(typeof noInit)

/**
 * null 타입
 * undefined와 마찬가지로 값이 없다는 뜻이나 js에서 개발자가 명시적으로 없는 값으로 초기화할때 사용된다.
 */

let initNull = null
console.log(initNull)
console.log(typeof initNull)
//타입이 오브젝트로 나오는건 자바스크립트의 오류임

/**
 * Symbol 타입
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const test1 = "1"
const test2 = "1"
console.log(test1 === test2)

const symbolTest1 = Symbol("1")
const symbolTest2 = Symbol("1")
console.log(symbolTest1 === symbolTest2)
//위와 다르게 false가 생김

/**
 * Object 타입
 * js에서 정말 많이 사용함.
 * Map
 * 키 : 벨류의 쌍으로 이루어져있다.
 * key : value
 */

const dictionary = {
  red: "빨간색",
  orange: "주황색",
}

console.log(dictionary["red"]) //키를 넣으면 벨류값이 나옴
console.log(dictionary.red)

/**
 * array 타입
 * 값을 리스트로 나열 할 수 있는 타입
 * index라는 개념이 있다. 0부터 1씩 올라감
 */

const membersArray = ["a", "b", "c"]
console.log(membersArray[2])
console.log(membersArray)
membersArray[0] = "A"
console.log(membersArray[0])

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시 (타입스크립트, c )
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론함 (자바스크립트)
 */
