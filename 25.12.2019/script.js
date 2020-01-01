/*let ok = confirm("Вопрос");
if (ok) {
    alert(ok);
}
else {
    alert();
}
let answer = prompt("Введите имя");
alert("Hello " + answer);

let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
arr = [1, 2, 3];
arr = [true, 'dfd', 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

*/
/*
let arr = [2, 3, 5, 9];
console.log(arr[0] * arr[2] + arr[1] / arr[3]);
arr[11] = 91;
console.log(arr.length);*/
/*
arr1 = [37, 0, 50, 46, 34, 46, 0, 13];
arr2 = [];
for (let i = 0; i < 10; i++) {
    arr2[i] = Math.round(Math.random() * 100);
    console.log(arr2[i]);
}
console.log("В обратном порядке");

for (let i = 9; i >= 0; i--){
    console.log(arr2[i]);
}

*/
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let sum;
for (let i = 0; i < 20; i++) {
    arr[i] = prompt();
    sum += 1 / arr[i];

}
sum = 1 / sum;
console.log(sum);