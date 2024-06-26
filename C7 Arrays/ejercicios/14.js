function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let mayoresADiez = array.filter(numero => numero > 10);
  let cantidadDeNumerosMayores = mayoresADiez.length;
  return cantidadDeNumerosMayores;

}

module.exports = contarElementosMayoresA10;
