function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let elementosVistos = {};
  // Utilizamos el método .find() para buscar el primer elemento repetido
  return numeros.find(numero => {
    // Si el elemento ya está en el objeto, lo encontramos
    if (elementosVistos[numero]) {
      return true;
    } else {
      // Si no, lo marcamos como visto
      elementosVistos[numero] = true;
    }
    return false;
  });

}
module.exports = encontrarElementoRepetido;