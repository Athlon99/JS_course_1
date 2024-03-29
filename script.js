// ______Practice 1 _______

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

/* function firstTask() {
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

/* function secondTask() {
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

/* function thirdTask() {
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
thirdTask(); */

// ______Coding Exercise 5____

/* const lines = 6;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
    for (let i=1; i<=lines; i++) {
        for (let s=0; s<lines-i; s++) {
            result += " ";
        }
        for (let j=0; j<=i*2-2; j++) {
            result += "*";
        }
        result += '\n';
    }
console.log(result); */


// ______Practice 2 _______

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

/* const prompt = require('prompt-sync')();
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB); */

// ______Coding Exercise 6____Task 1 

/* function sayHello(name) {
    return `Privet, ${name}!`;
}

let a=sayHello('Pavel');
console.log(a); */

// ______Coding Exercise 6____Task 2

/* function returnNeighboringNumbers(num) {
    const numbers = [];
    for (let i=0; i<3; i++) {
        numbers[i]=num-1+i;
    }
    return numbers;
}
let a = returnNeighboringNumbers(20);
console.log (a); */

// ______Coding Exercise 6____Task 3

/* function getMathResult(a, b) {
    let result=a;
    if (b>0 && typeof(b) === 'number') {
        for (let i=2; i<b+1; i++) {
            result += "---"+a*i;
        }
    }
    return result;
}
let c = getMathResult (2, 10);
console.log (c); */

// ______Practice 3 _______

/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

/* 

let numberOfFilms;
const prompt = require('prompt-sync')();

function start() {
    
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

 */

// ______Coding Exercise 7____Task 1 

// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// let m = calculateVolumeAndArea(5);
// console.log (m);

// ______Coding Exercise 7____Task 2 

/* function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

let m=getCoupeNumber(33);
console.log(m); */

// ______Coding Exercise 8____Task 1 

/* function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

let m=getTimeFromMinutes(180);
console.log(m); */

// ______Coding Exercise 8____Task 2 

/* function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

let m = findMaxNumber(1, 5, 6.6, 10.5);
let n = findMaxNumber(1, 5, '6', '10');
console.log(m);
console.log(n); */
/* 
// ______Coding Exercise 9____

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

m=fib(10);
console.log (m);

 */

/* function printOddNumbers(x) {
    for ( let i=1; i<=x; i++) {
      if (i%2===0) continue;
      console.log (i);
    }
  }
  printOddNumbers(5); */

  // ______Coding Exercise 10__________________________________________________________________________________

/*   const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

let a = personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

let b = showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

let c = showProgrammingLangs(personalPlanPeter);

console.log (a);
console.log (b);
console.log (c); */

  // ______Coding Exercise 11__________________________________________________________________________________

/*   const family = ['Peter', 'Ann', 'Alex', 'Linda'];

  function showFamily(arr) {
      let str = '';
  
      arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
  
      arr.forEach(member => {
          str += `${member} `
      });
  
      return str;
  }
  
  let a = showFamily(family);
  console.log(a);
  
  const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
  
  function standardizeStrings(arr) {
      arr.forEach(city => {
          console.log(city.toLowerCase())
      })
  }
  
  let b = standardizeStrings(favoriteCities);
  console.log(b); */

  // ______Coding Exercise 12 Task 1__________________________________________________________________________________

/* const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

a = reverse(someString);
console.log(a); */

// ______Coding Exercise 12 Task 2__________________________________________________________________________________

/* const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

a = availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
console.log(a); */

// ______Coding Exercise 13__________________________________________________________________________________

/* const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    console.log(`square = ${square}`);
    console.log(`volume = ${volume}`);
    console.log(`expenses = ${volume * data.moneyPer1m3}`);

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }


}

isBudgetEnough(shoppingMallData);
 */

//_______________________Task: Function spinWords_________________________________________________________________________________
/* 
function spinWords(string) {
    let sentenceArray = string.split(' ');
    let result = '';
    let word, wordReversed;

    for (let i = 0; i < sentenceArray.length; i++) {
        word = sentenceArray[i];
        if (i > 0) {
            result += ' ';
        }
        if (sentenceArray[i].length >= 5) {
                wordReversed = '';
                for (let j = word.length-1; j >= 0; j--) {
                wordReversed += word[j];
            }
            result += wordReversed;
        } else {
            result += word;
        }
    }
    return result;

}

console.log(spinWords('123 1234567 12 123456789')); */

//_______________________Task: Function Reverse String_________________________________________________________________________________

/* function solution(str){
    let newStr = "";
    for (let i = str.length -1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  }
  
  solution('world');
  solution('word'); */


  //_______________________Task: Function Remove First and Last Character_________________________________________________________________________________

/*   function removeChar(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (i !== 0 && i !== str.length-1) {
        newStr += str[i]
      }
    }
     return newStr;
   }

   removeChar('12345678'); */

 //_______________________Task: Function Is it a Palindrome?_________________________________________________________________________________
 
 function isPalindrome(x) {
    const lowercaseInput = x.toLowerCase();
    const forward = lowercaseInput;
    const backward = lowercaseInput.split("").reverse().join("");
    return forward === backward;
  }  
  isPalindrome('Abba');