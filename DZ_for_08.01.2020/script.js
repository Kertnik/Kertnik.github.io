let slova = ["воздух", "ребята", "солнце", "память", "вопрос", "тишина", "оружие", "густой", "точный", "мастер"];
alert("Угадайте мое секретное слово!\nОно содержит 6 букв,и вы можете угадывать одну букву за раз.Вам предоставляется 6 неправильных угадываний.");
while (confirm("Сыграем в игру?")) {
    let exceptions = [];
    let slovo = slova[Math.round(Math.random() * 10)].toUpperCase();
    let vivod = [];
    for (let i = 0; i < slovo.length; i++) {
        vivod[i] = "_";
    }
    while (exceptions.length < 6 && vivod.includes("_")) {
        let char = prompt("Угадай букву").toUpperCase();
        if (char.length > 1) {
            alert("Неверный ввод")
        }
        else {
            if (slovo.includes(char)) {
                for (let i = 0; i < slovo.length; i++) {
                    if (slovo[i] == char) {

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
        alert(`Вы проиграли, было загадано слово:\"${slovo}\"`);
    }
    else {
        alert(`Вы угадали, ваше слово:\"${slovo}\"`);
    }

}
alert("Вы будете перенаправлены на стартовую страницу")
document.location.replace("../index.html");

