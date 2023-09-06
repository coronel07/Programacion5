const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
const msg = "Hola messi"
const n = 2                                           
const caracteres = [2,1]                              
let traduccion = []
let inicio = 0
 
function traductor(){
  const upperMsg = msg.toUpperCase();
  
  for(let i = 0; i< upperMsg.length ; i++){                 
    for(let y = 0; y< abecedario.length ; y++){       
      if(upperMsg[i] == abecedario[y]){
        traduccion.push(abecedario[y + caracteres[inicio]]);
        inicio++
      if(inicio == n){
        inicio = 0;
      }
      } 
    }
  }
  return traduccion.join("")
}

console.log(traductor()); 
