let li = document.createElement('li'),
    menu = document.querySelector('.menu'),
    menuitem = document.querySelectorAll('.menu-item'),
    body = document.querySelector('body'),
    column = document.querySelectorAll('.column'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    prompts = document.getElementById('prompt'),
    quest = prompt('Как вы относитесь к технике "Apple" ');
console.log(prompts);
// console.log(prompt);
console.log(li);
console.log(title);
console.log(menu);
title.innerHTML = 'Мы продаем только подлинную технику Apple';
body.style.background = 'url(./img/apple_true.jpg)';
li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
prompts.innerHTML = quest;
menu.appendChild(li);
column[1].removeChild(adv);
menu.insertBefore(menuitem[2], menuitem[1]);
