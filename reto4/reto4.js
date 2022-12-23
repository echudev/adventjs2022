
// tengo un array con 3 cajas/posiciones: 0, 1, 2
// quiero ver que de esas cajas, una sea menor que otra en todos sus lados

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
] // true

const boxes1 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2 }
] // false

// tengo que agarrar una caja, compararla con las otras y ver que sea menor que una de ellas
// si es menor, la saco del array y sigo con la caja siguiente
// comparo si la caja siguiente tiene todos sus lados menores a otra caja, si es asi, la saco, y sigo con la siguiente
// si de la más chica a la más grande puedo meter una dentro de otra, devuelvo true, de lo contrario rompo el ciclo y retorno false
// primero las ordeno de menor a mayor tomando cualquier lado como referencia 
// (todos los lados deben ser menores, asi que es indiferente cual tomo 

function fitsInOneBox(boxes) {
    const orderedBoxes = boxes.sort((box1, box2) => box1.l - box2.l)
    return !!orderedBoxes
      .reduce((acc, curr) =>
       acc = (acc.l < curr.l && acc.w < curr.w && acc.h < curr.h)
          ? acc = curr
          : false)
  }

console.log(fitsInOneBox(boxes1))
console.log(fitsInOneBox(boxes))