
let arr = [];
function Enter() {
    let a = prompt("Введите колличество чисел в массиве");
    for (let i = 0; i < a; i++) {
        arr[i] = parseInt(prompt("Число " + (i + 1)));
    }
    Quest1(document.getElementById("Out1"));
    Quest2(document.getElementById("Out2"));
    Quest3(document.getElementById("Out3"));
    Quest4(document.getElementById("Out4"));
    Quest5(document.getElementById("Out5"));
    Quest6(document.getElementById("Out6"));
    Quest7(document.getElementById("Out7"));

}

function Quest1(elem) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            elem.innerHTML += `${arr[i]};`;
        }
    }

}

function Quest2(elem) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        elem.innerHTML += `${arr[i] / max};`;

    }
}
function Quest3(elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            elem.innerHTML += `Первое положительное:${arr[i]},номер ${i + 1}`;
            break;
        }
    }
}

function Quest4(elem) {
    let arr_c = arr.slice(0);

    for (let i = 0; i < arr.length; i++) {
        arr_c[i] = arr_c[i] * -1;
        elem.innerHTML += `${arr_c[i]};`;
    }

}
function Quest5(elem) {
    let arr_c = arr.slice(0);
    let max = arr[0];
    let maxIndex = 0;
    let minIndex = 0;
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr_c[i]) {
            max = arr_c[i];
            maxIndex = i;
        }
        if (min > arr_c[i]) {
            min = arr_c[i];
            minIndex = i;
        }
    }
    arr_c[minIndex] = max;
    arr_c[maxIndex] = min;
    for (let i = 0; i < arr.length; i++) {
        elem.innerHTML += `${arr_c[i]};`;
    }
}
/*
8. Допустим, требуется зашифровать сообщения, состоящие из определенных символов.Например, исходный текст состоит из цифры от 0 до 9(представленных в программе в виде символов) и других знаков и имеет длину в 15 символов.В шифровке на место цифр подставляются соответствующие им знаки, на место всех остальных символов дополнительный 11 - й знак.*/
function Quest6(elem) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    elem.innerHTML += `Среднее: ${average}, большие `;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            elem.innerHTML += ` ${arr[i]};`;
        }
    }
}
function Quest7(elem) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                elem.innerHTML += ` ${arr[i]};`;
            }

        }


    }
}
function Quest8(elem) {
    let zn = [document.getElementById("symb1").nodeValue, document.getElementById("symb2").value, document.getElementById("symb3").value, document.getElementById("symb4").value, document.getElementById("symb5").value, document.getElementById("symb6").value, document.getElementById("symb7").value, document.getElementById("symb8").value, document.getElementById("symb9").value, document.getElementById("symb10").value];
    let cypher = [document.getElementById("cyph1").value, document.getElementById("cyph2").value, document.getElementById("cyph3").value, document.getElementById("cyph4").value, document.getElementById("cyph5").value, document.getElementById("cyph6").value, document.getElementById("cyph7").value, document.getElementById("cyph8").value, document.getElementById("cyph9").value, document.getElementById("cyph10").value, document.getElementById("cyph11").value];
    let input = document.getElementById('inputText').value.split('');
    for (let i = 0; i < input.length; i++) {
        let a = input[i];
        for (let j = 0; j < zn.length; j++) {
            if (input[i] == zn[j]) {
                input[i] = cypher[j];
            }
        }
        if (a == input[i]) {
            input[i] = cypher[10];
        }
    }
    document.getElementById("Answer8").innerHTML = "Зашифрованый текст";
    elem.innerHTML = input.join('');

}
