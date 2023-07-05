function printOddNumbers(x) {
    for ( let i=1; i<=x; i++) {
      if (i%2===0) continue;
      console.log (i);
    }
  }
  printOddNumbers(5);