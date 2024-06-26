function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arrayMultiplicado = 0;
  for(var i =0; i < array.length; i++){
     arrayMultiplicado = arrayMultiplicado + array[i * 2]
  }
  return arrayMultiplicado;
}

module.exports = duplicarElementos;
