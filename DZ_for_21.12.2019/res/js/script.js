// 1. Составить программу вывода любого числа любое заданное число раз
// 2. Одна штука некоторого товара стоит 20, 4 грн.Напечатать таблицу стоимости 2, 3, ..., 20 штук этого товара
// 3. Напечатать таблицу умножения на 7: 1 х 7 = 7    2 х 7 = 14 ... 9 х 7 = 63
// 4. Дано целое число N(> 0).Используя операции деления нацело и взятия остатка от деления, найти количество и сумму его цифр.
// 5. Найти сумму положительных нечетных чисел, меньших 50.
// 6. Даны два целых числа A и B(A < B).Найти сумму и произведение всех целых чисел от A до B включительно.
// * 7. Даны целые положительные числа A и B(A < B).Вывести все целые числа от A до B включительно; при этом каждое число должно выводиться столько раз, каково его значение(например, число 3 выводится 3 раза).



for (let i = 2; i <= 20; i++) {
    if (i * 20.4 != Math.round(i * 20.4)) {
        document.querySelector(".task2 .answer").innerHTML += `${i}×20,4=${(i * 20.4).toFixed(1)}<br>`;
    }
    else {
        document.querySelector(".task2 .answer").innerHTML += `${i}×20,4=${(i * 20.4)}<br>`;
    }
}

for (let i = 0; i <= 10; i++) {
    document.querySelector(".task3 .answer").innerHTML += `${i}×7=${(i * 7)}<br>`;
}
{
    let sum = 0;
    for (let i = 1; i < 50; i += 2) {
        sum += i;
    }
    document.querySelector(".task5 .answer").innerHTML += "Сумма положительных нечетных чисел, меньших 50 равна: " + sum;
}


function task1() {
    document.querySelector(".task1 .answer").innerHTML = "";
    for (let i = +document.querySelector(".task1 .input2").value; i > 0; i--) {
        document.querySelector(".task1 .answer").innerHTML += `${document.querySelector(".task1 .input1").value}  `;
    }

}

function task4() {
    document.querySelector(".task4 .answer").innerHTML = "";
    let a = +document.querySelector(".task4 .input1").value;
    let count = 0, sum = 0;
    while (a > 0) {
        count++;
        sum += a % 10;
        a = Math.round(a / 10);
    }
    document.querySelector(".task4 .answer").innerHTML += `Количество цифр:${count}<br>Сумма:${sum}`;
}

function task6() {

    document.querySelector(".task6 .answer1").innerHTML = "";
    document.querySelector(".task6 .answer2").innerHTML = "";
    let a = +document.querySelector(".task6 .input1 ").value;
    let b = +document.querySelector(".task6 .input2 ").value;
    for (let i = a; i <= b; i++) {
        for (let j = i; j <= b; j++) {
            document.querySelector(".task6 .answer1").innerHTML += `${i}+ ${j}=${i + j}     `;
            document.querySelector(".task6 .answer2").innerHTML += `${i}* ${j}=${i * j}     `;
        }
        document.querySelector(".task6 .answer1").innerHTML += `<br>  `;
        document.querySelector(".task6 .answer2").innerHTML += `<br>  `;
    }
}

function task7() {
    document.querySelector(".task7 .answer").innerHTML = "";
    let a = +document.querySelector(".task7 .input1 ").value;
    let b = +document.querySelector(".task7 .input2 ").value;
    for (let i = a; i <= b; i++) {
        for (let j = 0; j < i; j++) {
            document.querySelector(".task7 .answer").innerHTML += i + " ";
        }
        document.querySelector(".task7 .answer").innerHTML += "<br> ";

    }
}
