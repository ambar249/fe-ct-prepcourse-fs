function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let resultados = [];
    let iteraciones = 0;

    while (iteraciones < 10) {
        // Aumentamos num en 2
        num += 2;

        // Verificamos si estamos en la quinta iteración
        if (iteraciones === 4) {
            // No sumamos en este caso y continuamos con la siguiente iteración
            iteraciones++;
            continue;
        }

        // Guardamos el nuevo valor de num en el array resultados
        resultados.push(num);

        // Incrementamos el contador de iteraciones
        iteraciones++;
    }

    return resultados;
}

module.exports = continueStatement;
