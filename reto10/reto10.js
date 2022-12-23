function checkJump(heights) {
    const journey = []

    //guardo el trayecto de papa noel en el array journey 
    //1 - si aumenta la altura del punto previo al siguiente (sube)
    //2 - si disminuye la altura del punto previo al siguiente (baja)
    for (let i = 0; i < heights.length; i++) {
        if (i + 1 < heights.length) {
            if (heights[i] < heights[i + 1]) {
                journey.push(1)
            } else if (heights[i] > heights[i + 1]) {
                journey.push(0)
            } else if (heights[i] == heights[i + 1]) {
                null
            }
        }
    }
    //regla 1: Tiene que empezar subiendo, el punto 2 tiene que ser más alto que el segundo
    //2 - una vez que empieza a bajar, no puede volver a subir, osea, tengo que usar un estado
    //

    heights.map()

    const checkRebound = (data) => {
        let rebound = false
        for (let i = 0; i < data.length; i++) {
            if (i + 1 < data.length) {
                if (data[i] < data[i + 1]) {
                    rebound = true
                }
            }
        }
        return rebound
    }

    return (journey.includes(1) && journey.includes(0) && !checkRebound(journey))
}









const heights = [1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
const heights3 = [1, 2, 1]
//const heights = [1, 2, 3, 2, 1, 2, 3]
console.log(checkJump(heights)) // true
console.log(checkJump(heights3)) // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2

*/

const heights2 = [1, 7, 3, 5]
console.log(checkJump(heights2)) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3

*/