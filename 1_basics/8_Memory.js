/**
 * 메모리란?
 * cpu - 실제 계산을 하는 영역
 * memory - 데이터를 저장하는 공간
 *
 * 메모리는 셀 단위로 이루어져 있다.
 * 각각의 메모리 셀은 1바이트로 이루어져 있다.
 * 각각의 메모리는 각각 주소를 가지고 있다
 * 1GB = 1,073,741,824bit
 * 0x000000 16진수로 표현을 함
 *
 * 예를 들어 let calc = 2+5라고 선언을 하면
 * 메모리에서 2와 5를 따로 가져오고 7이라는 값을 어떤 메모리에 저장을 하게 됨
 *
 * 근데 메모리 공간에 마음대로 접근하면 문제가 생길 확률이 높아진다.
 * -> 메모리 주소에 접근을 하는게 아니라 calc를 호출하면 해당 주소가 오는 방식
 * -> 그래서 변수를 선언하는 것
 */
