function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments === 0){
    return 0;
  }
  if (arguments.length = 1){
    return arguments
  }
  var producto = 0;
  for (var i = 0; i < arguments.length; i++){
  producto.push(arguments[i] * i);
  }
  return producto;
}

module.exports = multiplicarArgumentos;
