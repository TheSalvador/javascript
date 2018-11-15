'use strict';

let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    answer = prompt('Введите обязательную статью расходов в этом месяце'),
    answer1 = prompt('Во сколько обойдется?');
console.log(money, time);

let appData = {
    budget: money,
    timeData: time,
    expenses:{ answer, answer1
    },
    optionalExpenses: '',
    income: '',
    savings: false,
  };
console.log(appData);
alert (money/30 + ' ваш бюджет на день');
console.log(money/30);