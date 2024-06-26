function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  for (let numero of secuencia) {
    // Verificamos si el número actual es múltiplo de n
    if (numero % n === 0) {
        // Si es así, retornamos este número (primer múltiplo encontrado)
        return numero;
    }
}




//return secuencia.find(num => num % n === 0) || 
}

module.exports = encontrarPrimerMultiploDeN;