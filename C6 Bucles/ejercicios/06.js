function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  for (var i = 0; i < num.length; i++){
    if (i === 3){
      return true;
    } 
    return false;
  } 
}

module.exports = tieneTresDigitos;
