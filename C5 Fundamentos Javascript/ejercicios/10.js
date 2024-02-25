function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  var fechaObj = new Date(fecha);

  // Verifica si la fecha es válida
  if (isNaN(fechaObj.getTime())) {
      // Si getTime() devuelve NaN, la fecha no es válida
      return false;
  } else {
      // Si getTime() devuelve un valor numérico, la fecha es válida
      return true;
  }

}

module.exports = esFechaValida;