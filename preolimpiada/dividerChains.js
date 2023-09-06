function dividerChainsRecursive(num) {
    let divisores = [];
  
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisores.push(i);
      }
    }
    
    let n = 1;
    for (let i = 0; i < divisores.length; i++) {
      if (divisores[i] > n && divisores[i] !== num) {
        n = divisores[i];
      }
    }
    
    if (num === 1) {
      return num;
    }
  
    let resultado = num + dividerChainsRecursive(n);
    return resultado 
  }
  
  let num = 60
  console.log(dividerChainsRecursive(num));