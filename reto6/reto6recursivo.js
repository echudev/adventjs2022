function miFuncion(x) {
    // Declaramos el array resultados al comienzo de la función
    let resultados = [];
  
    // Si x es mayor que 0, llamamos a la función de manera recursiva
    if (x > 0) {
      resultados = resultados.concat(miFuncion(x - 1));
      console.log(resultados)
    }
  
    // Añadimos x al array resultados
    resultados.push(x);
  
    // Retornamos el array resultados
    return resultados;
  }
  
  console.log(miFuncion(5)); // Imprime [0, 1, 2, 3, 4, 5]
  
