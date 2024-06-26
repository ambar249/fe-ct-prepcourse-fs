function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let resultado = [];
  let i = 0;
  do {
    i = i +5;
    resultado = resultado + i;
  }while(num < 8)
  return resultado; 
}

module.exports = doWhile;