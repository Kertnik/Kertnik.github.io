/* function quest3() {
    let a = +document.getElementById("input1").value;
    let b = +document.getElementById("input2").value;
    if (a == b) {
        a = b = 0;
    }
    else {
        a = b = a + b;
    }
    console.log({ a });
}
let arr = [226,123, 226];
for (let i = 0; i < arr.length; i++) {
  
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            let a = arr[i];
            arr[i] = arr[j];
            arr[j] = a;

        }

    }

}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}*/
function task() {
    let a = +document.getElementById("input1").value;

    switch (a) {
        case 1:
            console.log("Понедельник");
            break;
        case 2:
            console.log("Вторник");
            break;
        case 3:
            console.log("Среда");
            break;
        case 4:
            console.log("Четверг");
            break;
        case 5:
            console.log("Пятница");
            break;
        case 6:
            console.log("Суббота");
            break;
        case 7:
            console.log("Воскресенье");
            break;
        default:
            console.log("Ошибка");
    }

    switch (a) {
        case 1:
            console.log("Январь");
            break;
        case 2:
            console.log("Февраль");
            break;
        case 3:
            console.log("Март");
            break;
        case 4:
            console.log("Апрель");
            break;
        case 5:
            console.log("Май");
            break;
        case 6:
            console.log("Июнь");
            break;
        case 7:
            console.log("Июль");
            break;
        case 8:
            console.log("Август");
            break;
        case 9:
            console.log("Сентябрь");
            break;
        case 10:
            console.log("Октябрь");
            break;
        case 11:
            console.log("Ноябрь");
            break;
        case 12:
            console.log("Декабрь");
            break;

        default:
            console.log("Ошибка");
            break;
    }
    switch (a) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");

            break;
    }
    let b = +document.getElementById("input2").value;
    let c = +document.getElementById("input3").value;
    switch (a) {
        case 1: {
            console.log(`a+b=${b + c}`);
            break;
        }
        case 2:
            {
                console.log(`a-b=${b - c}`);
                break;
            }
        case 3: {
            console.log(`a*b=${b * c}`);
            break;
        }
        case 4: {
            console.log(`a/b=${b / c}`);
            break;
        }
    }
    switch (a) {
        case 1:
            console.log("Понедельник");
            break;
        case 2:
            console.log("");
            break;
        case 3:
            console.log("Удовлетворительно");
            break;
        case 4:
            console.log("Хорошо");
            break;
        case 5:
            console.log("Отлично");
            break;
        default: {
            console.log("Ошибка");
        }
    }
}
function task2() {
    let a = document.getElementById("input3").value;
    let b = document.getElementById("input4").value;
    let true_login = "qwerty";
    let true_pass = "mnbvcxz";
    alert((a == true_login && b == true_pass) ? "Correct" : "Incorrect");


}