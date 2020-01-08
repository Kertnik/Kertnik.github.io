//Strings methods
/*
let str = "Hi world!";
console.log(str.charAt(5));
console.log(str.indexOf("wor"));
console.log(str.lastIndexOf("or"));
let a = [str.split('')];
console.log(a);
console.log(str.substr(1, 5));//i wor
console.log(str.substring(1, 5));// i wo
console.log(str.toUpperCase());
console.log(str.toLowerCase());*/

//pop push

let arr = [];
for (let i = 0; i < 10; i++) {

    arr[i] = Math.round(Math.random() * 100);
}

console.log(arr.pop());
arr.push(6)
console.log(arr);
console.log(arr.shift());
arr.unshift(2);
console.log(arr);
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[1][1] + " " + matrix[1][2]);

console.log(arr);
console.log("Сортировка " + arr.sort());
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
            let a = arr[j];
            arr[j] = arr[i];
            arr[i] = a;
        }
    }
}
console.log("Пузырчатая сортировка " + arr);

function printMsg(from, text = "undefined text") {
    alert(from + " say:" + text);
}
printMsg("Serg");
printMsg("Serg", "Hello")