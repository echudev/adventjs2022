function getGiftsToRefill(a1, a2, a3) {
    const inventario = []
    const reponer = []

    //creo un inventario con todos los regalos en existentes en los 3 almacenes sin repetir
    a1.map(r => inventario.some(i => i === r) ? null : inventario.push(r))
    a2.map(r => inventario.some(i => i === r) ? null : inventario.push(r))
    a3.map(r => inventario.some(i => i === r) ? null : inventario.push(r))

    //chequeo que regalos figuran solamente en 1 almacen
    for (let i = 0; i < inventario.length; i++) {
        let count = 0
        a1.includes(inventario[i]) ? null : count++
        a2.includes(inventario[i]) ? null : count++
        a3.includes(inventario[i]) ? null : count++
        count > 1 ? reponer.push(inventario[i]) : null
    }

    return reponer
}




const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']