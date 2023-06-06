const lines = 6;
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
console.log(result);