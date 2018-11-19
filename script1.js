'use strict';

let money   = +prompt('Ваш бюджет на месяц?'),
    time    = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
  };

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = +prompt('Во сколько обойдется?');

    if (typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses [a] = b;
    } else { 
      i--;
    }
}
/*let  x = 0;
while (x < 2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = +prompt('Во сколько обойдется?');
   if (typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
      appData.expenses[a] = b;
      x++;
    }
}*/
/*let x = 0;
do {
  let a = prompt('Введите обязательную статью расходов в этом месяце'),
      b = +prompt('Во сколько обойдется?');
      if (typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
        x++;
      }  
} while (x < 2);*/
appData.moneyPerDay = appData.budget / 30;
console.log(appData);
alert ('Ваш бюджет на день: ' + appData.moneyPerDay);
if(appData.moneyPerDay < 1000) {
  console.log('Минимальный уровень дохода');
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
  console.log('Средний уровень доходов');
} else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 15000) {
  console.log('Высокий уровень доходов');
} else {
  console.log('Вы сделали что то Не так');
}