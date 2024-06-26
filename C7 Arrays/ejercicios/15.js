function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indiceMayor = [];
  for(var i = 0; i < array.length; i++){
    if (array[i] > array){
      indiceMayor.push(array[i])
    }

  }
  return indiceMayor.length;
}

module.exports = encontrarIndiceMayor;
