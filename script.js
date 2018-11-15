let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    answer = prompt('Введите обязательную статью расходов в этом месяце'),
    answer1 = prompt('Во сколько обойдется?');
console.log(money, time);

let appData = {
    budget: money,
    timeData: time,
};
console.log(appData);

let expenses = {
  answer, answer1,
};
console.log(expenses );
