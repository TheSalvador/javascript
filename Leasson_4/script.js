'use strict';

let money, time;
function start() {
    money   = +prompt('Ваш бюджет на месяц?');
    time    = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == '' || money == null) {
      money   = +prompt('Ваш бюджет на месяц?');
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      alert ('Ваш бюджет на день: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
      if(appData.moneyPerDay < 1000) {
        console.log('Минимальный уровень дохода');
      } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
        console.log('Средний уровень доходов');
      } else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 15000) {
        console.log('Высокий уровень доходов');
      } else {
        console.log('Вы сделали что то Не так');
      }
    },
    checkSavings: function() {
      if (appData.savings == true) {
        let save = +prompt('Сумма накоплений'),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' +appData.monthIncome);
      }
    },
    chooseOptExpenses: function() {
      for (let x = 0; x < 3; x++) {
        let  y = prompt('Статья необязательных расходов?');
        if (typeof(y) != null && y != '' && y.length < 50) {
          console.log('done');
          appData.optionalExpenses[x] = y;
        }
      }
    },
    chooseIncome: function() {
        for (let i = 1; i < 2; i++) {
          let items = prompt('Какие действия принесут дополнительный доход?');

        if (typeof(items) === 'string' && (typeof(items)) != null && items != '' && items.length < 50){
          appData.income = items.split(', ');
          appData.income.push(prompt('Подумай хорошенько)))'));
          appData.income.sort();
          appData.income.forEach(function(item, i) {
          
          let b = i+1;
          console.log(b + ' - Способ доп. заработка: ' + item);
        });
        } else {i--;}
        alert('Способ доп. заработка: ' + appData.income);
        }
        
    }
};

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + appData[key]);
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
