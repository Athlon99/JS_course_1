/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* 'use strict';

const prompt = require('prompt-sync')();
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

// ______Coding Exercise 3 __ Task 1 ___

/* 'use strict';
function firstTask() {
    for ( let i = 5; i <=10; i++) {
    console.log(i);
    }
}
firstTask(); */

// ______Coding Exercise 3 __ Task 2 ___

/* 'use strict';
function secondTask() {
    for ( let i=20; i>=10; i--) {
        if (i===13) break;
        console.log (i);
    }
}
secondTask(); */

// ______Coding Exercise 3 __ Task 3 ___

/* 'use strict';
function thirdTask() {
    for ( let i = 2; i<=10; i++) {
        if (i%2===0) {
            console.log (i);
        }
    }
}
thirdTask(); */

// ______Coding Exercise 3 __ Task 4 ___

/* 'use strict';
function fourthTask() {
    let i = 2;    
    while( i<=10) {
        if (i%2===0) {
            console.log (i);
        }
    i++;
    }
}
fourthTask(); */

// ______Coding Exercise 3 __ Task 5 ___

'use strict';

/* function fifthTask() {
    const arrayOfNumbers = [];
    

    // Пишем решение вот тут
    for (let i=5; i<=10; i++) {
        arrayOfNumbers[i-5]=i;
    }
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
}
fifthTask(); */

// ______Coding Exercise 4 __ Task 1 ___

f/* unction firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i=0; i<arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    // Не трогаем
    return result;
}
firstTask(); */

// ______Coding Exercise 4 __ Task 2 ___

f/* unction secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i=0; i<data.length; i++) {
        if (typeof(data[i])==='number') {
            data[i]=data[i]*2;
        }
        else if (typeof(data[i])==='string') {
            data[i]=data[i]+' - done';
        }
    }
    console.log(data);
    // Не трогаем
    return data;
}
secondTask();
 */
// ______Coding Exercise 4 __ Task 3 ___

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
        for (let i=data.length-1; i>=0; i--) {
            result [data.length-i-1]=data[i];
        }
    console.log (result);
    // Не трогаем
    return result;
}
thirdTask();