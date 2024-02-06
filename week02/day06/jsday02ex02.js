// 낙타봉 표기법(Camel case)
// myName, yourName

// 뱀 표기법(파이썬에서 선호)
// my_name, your_name
// 상수 MY_NAME


// 스프레드 연산자 사용X. 배열 복사

const arr1 = [100, 200, 300];
console.log("arr1: ", arr1);

const arr2 = [];
for(let i=0; i<arr1.length; i++){
    arr2.push(arr1[i]);
}
console.log("arr2: ", arr2);
arr2[1] = 2000;
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);


// 배열의 참조를 복사했다.
// 따라서 arr3을 수정하면 arr1이 수정된다.
const arr3 = arr1;
arr3[2] = 3000;
console.log("arr1: ", arr1);

// 스프레드 연산자 사용O. 배열 복사
const arr4 = [...arr1];
arr4[2] = 10000;
console.log("arr1: ", arr1);
console.log("arr4: ", arr4);