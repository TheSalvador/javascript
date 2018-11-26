'use strict';
let btn = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],
    inputs = document.querySelectorAll('.expenses-item'),
    expensesbtn = document.getElementsByTagName('button')[0],
    optexpensesbtn = document.getElementsByTagName('button')[1],
    budgetbtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    icome = document.querySelector('.choose-income'),
    check = document.querySelector('.checksavings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money, time;

btn.addEventListener('click', function() {
  time    = prompt('Введите дату в формате YYYY-MM-DD');
  money   = +prompt('Ваш бюджет на месяц?');

  while(isNaN(money) || money == '' || money == null) {
    money   = +prompt('Ваш бюджет на месяц?');
  }
  appData.budget = money;
  appData.timeData = time;
  budget.innerHTML = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDay();
});
expensesbtn.disabled = true;

inputs.forEach(function (item) {
    item.addEventListener('change', function () {
        if (item.value == '') {
            expensesbtn.disabled = true;
        } else {
          expensesbtn.disabled = false;
        }
    });
});

expensesbtn.addEventListener('click', function() {
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    let a = inputs[i].value,
        b = inputs[++i].value;

    if (typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses [a] = b;
        sum += +b;
        expenses.innerHTML = sum;
        
    } else { 
      i--;
    }
    appData.expensesSum = sum;
  }
});

optexpensesbtn.addEventListener('click', function(){
  for (let x = 0; x < optionalExpensesItem.length; x++) {
    let  y = optionalExpensesItem[x].value;
    if (typeof(y) != null && y != '' && y.length < 50) {
      console.log('done');
      appData.optionalExpenses[x] = y;
      optionalexpenses.innerHTML += appData.optionalExpenses[x] + ' ';
    }
  }
});

budgetbtn.addEventListener('click', function(){
  let expenses = appData.expensesSum;
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - expenses) / 30).toFixed();
    daybudget.innerHTML = appData.moneyPerDay;
    if(appData.moneyPerDay < 1000) {
      level.innerHTML = 'Минимальный уровень дохода';
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
      level.innerHTML = 'Средний уровень доходов';
    } else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 15000) {
      level.innerHTML = 'Высокий уровень доходов';
    } else {
      level.innerHTML = 'Вы сделали что то Не так';
    }
  } else {
    daybudget.innerHTML = 'Произошла ошибка';
  }
});
icome.addEventListener('input', function(){
  let items = icome.value;
  appData.income = items.split(', ');
  income.innerHTML = appData.income;

});
check.addEventListener('click', function(){
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});
sum.addEventListener('input', function(){
  if (appData.savings == true) {
    let sums = +sum.value,
        percents = +percent.value;
        appData.monthIncome = sums/100/12*percents;
        appData.yearIncome = sums/100*percents;
        monthsavings.innerHTML = appData.monthIncome.toFixed(1);
        yearsavings.innerHTML = appData.yearIncome.toFixed(1);
  }
});
percent.addEventListener('input', function(){
  if (appData.savings == true) {
    let sums = +sum.value,
        percents = +percent.value;
        appData.monthIncome = sums/100/12*percents;
        appData.yearIncome = sums/100*percents;
        monthsavings.innerHTML = appData.monthIncome.toFixed(1);
        yearsavings.innerHTML = appData.yearIncome.toFixed(1);
  }
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
