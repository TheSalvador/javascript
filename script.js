'use strict';

let money   = prompt('Ваш бюджет на месяц?'),
    time    = prompt('Введите дату в формате YYYY-MM-DD'),
    answer  = prompt('Введите обязательную статью расходов в этом месяце'),
    answer1 = prompt('Введите обязательную статью расходов в этом месяце'),
    answer2 = prompt('Во сколько обойдется?'),
    answer3 = prompt('Во сколько обойдется?');
console.log(money, time);

let appData = {
    budget: money,
    timeData: time,
    expenses:{ 
      answer : answer2,
      answer1 : answer3,
    },
    optionalExpenses: {},
    income: [],
    savings: false,
  };
console.log(appData);
alert (money/30 + ' ваш бюджет на день');
console.log(money/30);