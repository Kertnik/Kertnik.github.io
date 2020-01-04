/*let a;
var elem = document.getElementById('id');
console.log(elem);
console.log('fff');


function test() {
    b = 95;
}
test();
var b;


function foo() {
    a = 9
}

foo();
let a;
*/

let elem = document.getElementById("id1");

function foo() {
    let a = get();
    let b = document.getElementById("id2");
    let res = document.getElementById("result");
    res.value = parseInt(a.value) + parseInt(b.value);
    let i = 0;
    do {
        i += 2;
        console.log("hey Jackson");
        for (let j = i; j > 0; j--) {
            console.log("again");
        }
    }
    while (i < 10);
       
    
}

for (let i = 1; i <= 10; i++){
    document.write(`<br>`);
    for (let j = 1; j <= 10; j++){
        document.write(`${i}×${j}=${i*j} <br> `);
    }
   
}

function get() {
    return document.getElementById("id1");
}