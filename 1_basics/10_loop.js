/**
 * loops
 *
 * 1.) for
 * 2.) while
 */

for (let i = 0; i <= 10; i++) {
  console.log("반복중" + i)
}

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j)
  }
}

/**
 *  for..in
 */

const youjin = {
  name: "a",
  age: 19,
}

for (let key in youjin) {
  console.log(key) //키값을 가져옴
  console.log(youjin[key])
}

const iveMembersArray = ["a", "b", "c", "d"]

for (let key in iveMembersArray) {
  console.log(key) //인덱스를 키로 가져옴
  console.log(`${iveMembersArray[key]}`)
}

/**
 * for..of
 */

for (let values of iveMembersArray) {
  console.log(values) //값을 가져옴
}

/**
 * while
 */
let number1 = 0
while (number1 < 10) {
  number1++
  console.log("출력중", number1)
}

/**
 *do while
 */

let number3 = 0

do {
  number3++
  console.log(
    "먼저 한번 실행하고 나서 조건을 판단한다는 점, 실무에서 별로 사용하지않는 부분이다"
  )
} while (number3 <= 10)
