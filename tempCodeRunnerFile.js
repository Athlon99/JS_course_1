function getMathResult(a, b) {
    let result=a;
    if (b>0 && typeof(b) === 'number') {
        for (let i=2; i<b+1; i++) {
            result += "---"+a*i;
        }

    }
    return result;
}
let c = getMathResult (2, 10);
console.log (c);