console.log("external 방식의 JS");

// 배열 생성
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// 추가하기
numbers.push(6);
console.log(numbers);

// 제일 마지막 요소 뽑아내기
numbers.pop();
console.log(numbers);

// 제일 처음 요소 제거
numbers.shift();
console.log(numbers);

// 제일 처음에 요소 추가
numbers.unshift(0);
console.log(numbers);
// 여러 개도 추가 가능
numbers.unshift(100, 200);
console.log(numbers);