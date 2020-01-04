let words = ["воздух", "ребята", "солнце", "память", "вопрос", "тишина", "оружие", "густой", "точный", "мастер"];
alert("Угадайте мое секретное слово!\nОно содержит 6 букв,и вы можете угадывать одну букву за раз.Вам предоставляется 6 неправильных угадываний.");
while (confirm("Сыграем в игру?")) {
    let exceptions = [];
    let word = words[Math.round(Math.random() * 10)].toUpperCase();
    let vivod = [];
    for (let i = 0; i < word.length; i++) {
        vivod[i] = "_";
    }
    while (exceptions.length < 6 && vivod.includes("_")) {
        let char = prompt("Угадай букву");
        if (char.length > 1 & (char != "" | char != " " | char != undefined)) {
            alert("Неверный ввод")
        }
        else {
            char = char.toUpperCase();
            if (word.includes(char)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] == char) {

                        vivod[i] = char;
                    }
                }
                alert("Угадал");
            }
            else {
                alert("А вот и не угадал");
                exceptions[exceptions.length] = " " + char;
                alert(`Осталось ${6 - exceptions.length} попыток`);
            }
        }
        alert(`${vivod.join(" ")}\n Неправильные варианты :${exceptions.join()}`);
        char = "";
    }
    if (vivod.includes("_")) {
        alert(`Вы проиграли, было загадано слово:\"${word}\"`);
    }
    else {
        alert(`Вы угадали, ваше слово:\"${word}\"`);
    }

}
alert("Вы будете перенаправлены на стартовую страницу")
window.location.href("../index.html");

