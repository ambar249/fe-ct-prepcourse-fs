function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
   // Verificar si el arreglo es vacío
if (numeros.length === 0) {
    return null;
}
var n = numeros;
const n = numeros.length + 1; // El tamaño esperado del arreglo más 1
const sumaEsperada = (n * (n + 1)) / 2; // Suma esperada de la serie de 1 a n
const sumaActual = numeros.reduce((acc, num) => acc + num, 0); // Suma actual de los números en el arreglo

const numeroFaltante = sumaEsperada - sumaActual;

// Si el número faltante es mayor que 0 y menor o igual que n, lo retornamos
if (numeroFaltante > 0 && numeroFaltante <= n) {
    return numeroFaltante;
} else {
    return null; // Si no hay números faltantes en el rango esperado, retornamos null
}

}   

module.exports = encontrarNumeroFaltante;