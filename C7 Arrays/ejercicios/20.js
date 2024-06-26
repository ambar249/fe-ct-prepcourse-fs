function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
var iguales = true;
  for (var i = 0; i < array.length; i++){
    if (array[i] !== array[0]){
      iguales = false;
    }
  } 
  if (iguales){
    return true;
  }else {
    return false;
  }
  
}

module.exports = todosIguales;
