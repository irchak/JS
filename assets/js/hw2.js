//  Завдання на if
//1

const isDay = true;

if (isDay) {
  document.write(`<p> Світла тема </p>`);
} else {
  document.write(`<p> Темна тема </p>`);
}

//2
const isOnline = true;
if (isOnline) {
  document.write(`<p> Користувач онлайн</p>`);
} else {
  document.write(
    `<p> Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет</p>`
  );
}

//3
let inputUserPrise,
  discount,
  correctInputNumber = false;

do {
  inputUserPrise = +prompt("Сума покупки");
  correctInputNumber =
    !isNaN(inputUserPrise) && inputUserPrise != "" && inputUserPrise;
} while (!correctInputNumber);

if (inputUserPrise > 500 && inputUserPrise < 800) {
  discount = (inputUserPrise * 3) / 100;
  inputUserPrise -= discount;
  alert("Ціна з урахуванням знижки 3% дорівнює " + inputUserPrise + " грн");
} else if (inputUserPrise >= 800) {
  discount = (inputUserPrise * 5) / 100;
  inputUserPrise -= discount;
  alert("Ціна з урахуванням знижки 5% дорівнює  " + inputUserPrise + " грн");
} else {
  alert("Ціна без знижки " + inputUserPrise + " грн");
}

//switch..case
//1

const dayNumber = Number(prompt("Введіть день тижня: "));

switch (dayNumber) {
  case 1:
    alert("Понеділок");
    break;
  case 2:
    alert("Вівторок");
    break;
  case 3:
    alert("Середа");
    break;
  case 4:
    alert("Четвер");
    break;
  case 5:
    alert("Пʼятниця");
    break;
  case 6:
    alert("Субота");
    break;
  case 7:
    alert("Неділя");
    break;
  default:
    alert("Дня з таким номером не існує");
    break;
}

//2
const day2 = Number(20);

switch (day2) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    alert(day2 + " це перша декада");
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    alert(day2 + " це друга декада");
    break;
  case 21:
  case 22:
  case 23:
  case 24:
  case 25:
  case 26:
  case 27:
  case 28:
  case 29:
  case 30:
  case 31:
    alert(day2 + " це третя декада");
    break;
  default:
    alert("З значенням " + day2 + " декади не виявлено");
    break;
}
