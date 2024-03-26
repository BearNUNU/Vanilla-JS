/**
 * if and switch
 *
 *
 */

let number = 5

if (number % 2 === 0) {
  console.log("짝수임")
} else {
  console.log("홀수임")
}

if (number % 2 === 0) {
  console.log("2의 배수입니다.")
} else if (number % 4 === 0) {
  console.log("=4의 배수입니다.")
} else if (number % 5 === 0) {
  console.log("=5의 배수입니다.")
} else {
  console.log("2,4,5의 배수가 아니다.")
}

const englishDay = "monday"

let koreanDay

switch (englishDay) {
  case "monday":
    koreanDay = "월요일"
    break
  case "tuesDay":
    koreanDay = "화요일"
    break
  default:
    koreanDay = "몰루"
}
console.log(koreanDay)
