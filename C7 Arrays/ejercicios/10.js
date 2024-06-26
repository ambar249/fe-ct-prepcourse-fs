function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var string = "";
  for (var i = 0;i < array.length; i++){
    if (array[i] > 5){
      string.push(array[i]);
    }
    return string;
 // }
  //metodo reduce()
    //return array.reduce((obtenerPrimerStringLargo, actual) => {
    //return actual.length > obtenerPrimerStringLargo.length ? actual : obtenerPrimerStringLargo;
  //}, "");
  
} 
}

module.exports = obtenerPrimerStringLargo;
