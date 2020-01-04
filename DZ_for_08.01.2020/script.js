let words = ["воздух", "ребята", "солнце", "память", "вопрос", "тишина", "оружие", "густой", "точный", "мастер"];
alert("Угадайте мое секретное слово!\nОно содержит 6 букв,и вы можете угадывать одну букву за раз.Вам предоставляется 6 неправильных угадываний.");
while (confirm("Сыграем в игру?")) {
    let exceptions = [];
    let word = words[Math.round(Math.random() * 10)].toUpperCase();
    let output = [];
    for (let i = 0; i < word.length; i++) {
        output[i] = "_";
    }
    while (exceptions.length < 6 && output.includes("_")) {
        let char
        try {
            char = prompt("Угадай букву").toUpperCase();
        }
        catch{
            alert("Неверный ввод");
            break;
        }

        if (char.length != 1 | char == "" | char == " ") {
            alert("Неверный ввод")
        }
        else {
            if (word.includes(char)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] == char) {

                        output[i] = char;
                    }
                }

                alert("Угадал");
                if (!output.includes("_")) {
                    break;
                }
            }
            else {
                alert("А вот и не угадал");
                exceptions[exceptions.length] = " " + char;

                if (exceptions.length >= 6) {
                    break;
                }
                alert(`Осталось ${6 - exceptions.length} попыток`);

            }

            alert(`${output.join(" ")}\nНеправильные варианты :${exceptions.join()}`);
            char = "";


        }
    }
    if (output.includes("_")) {
        alert(`Вы проиграли, было загадано слово:\"${word}\"`);
    }
    else {
        alert(`Вы угадали, ваше слово:\"${word}\"`);
    }

}


alert("Вы будете перенаправлены на стартовую страницу");
window.location.href = "../index.html";

