 const family = ['Peter', 'Ann', 'Alex', 'Linda'];

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
  console.log (b);