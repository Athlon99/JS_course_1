function returnNeighboringNumbers(num) {
    const numbers = [];
    for (let i=0; i<3; i++) {
        numbers[i]=num-1+i;
    }
    return numbers;
}
let a = returnNeighboringNumbers(20);
console.log (a);