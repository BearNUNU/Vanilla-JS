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

/**
 * break
 *
 */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i)
}
let number2 = 0
while (number2 < 10) {
  if (number2 === 5) {
    break
  }
  number2++
  console.log(number2) //4에서는 브레이크가 걸리지않아서 5까지 출력된다
}

/**
 * continue
 */
for (let c = 0; c < 10; c++) {
  if (c === 5) {
    continue
  }
  console.log(c) //c 가 5가 되면 스킵을 하고 4 다음 6이 나오게됨
}

while (number2 < 10) {
  if (number2 === 5) {
    continue
  }
  number2++
  console.log(number2)
}
