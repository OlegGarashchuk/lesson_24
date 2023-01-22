"use strict"

//function showName() {
//   console.log('Вася!');
//}
//setTimeout(showName, 0);
//console.log('Коля!'); Коля першим попаде в консоль

//showMessage();
//function showMessage() {
//   console.log('Повідомлення'); правильно
//}

//showMessage();
//let showMessage = function () {
//   console.log('Повідомлення'); неправильно, якщо функціональний вираз то викликати його можна після його сворення.
//}


//let showMessage;

//if (2 > 1) {
//   showMessage = function () {
//      console.log('Повідомлення');
//   }
//}
//showMessage();




//let arr = ['Ваня', 'Иштван', 'Оля',];
//let newArr = arr;
//newArr.push('Петя');
//console.log(arr.length); 4


//let users = ["Ваня", "Иштван",];
//users.push('Оля');
//console.log(users);
//users[1] = "Петя";
//console.log(users);
//let removed = users.splice(0, 1);
//console.log(removed);
//users.unshift("Маша", "Паша");
//console.log(users);


//let arr = ['Ваня', 'Иштван', 'Оля',];
//let removed = arr.splice(1, 1);
//console.log(removed);

//let strict = 'Ваня,Иштван,Оля';
//let arr = strict.split(',');
//console.log(arr);

//let arr = [9, 2, 8,];
//let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
//   console.log(previousValue);
//})
//викликало помилку через невизначену змінну arrTwo. Якщо б там написати arr, то викличе 9 і Undefinded

//DOM-------------------------------------

const dataElementOne = document.querySelector('[data-say-hi]');
const dataAttribute = dataElementOne.getAttribute('data-say-hi');
console.log(dataAttribute);

//Задача 2

const elemsText = document.querySelectorAll('.list>li');
console.log(elemsText[1]);

//Задача 3

const getCollection = document.getElementsByClassName('like');
console.log(getCollection);

//Задача 4
//const list = document.querySelectorAll(".menu-four");
//list.insertAdjacentHTML(
//   'beforeend',
//   '<li>Текст</li>'
//);


//JavaScript розміри прокрутка і координати елементів на сторінці і вікна браузера.

//Задача 1
const windowWidth = window.innerWidth;
console.log(windowWidth);
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
console.log(mainElementWidth);
const scrollWidth = windowWidth - mainElementWidth;
console.log("Ширина полоси прокрутки:", scrollWidth);

//Задача 2
function scrollTop() {
   window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth"
   })
}
setTimeout (scrollTop, 1000);

//Задача 3
const block = document.querySelector('.block2');
const getBlockCoords = block.getBoundingClientRect();
console.log(getBlockCoords);

const item = document.querySelector('.block3');
const getItemCoords = item.getBoundingClientRect();
console.log(getItemCoords);


const list = document.querySelector('.list');
const getListCoords = list.getBoundingClientRect();
console.log(getListCoords);
