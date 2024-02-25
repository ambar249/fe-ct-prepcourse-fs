function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  let dividendo = x;
  let divisor = y;
  
  let resto = dividendo % divisor;
  return resto;
}

module.exports = obtenerResto;