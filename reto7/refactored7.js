function getGiftsToRefill(a1, a2, a3) {
    let inventario = []
    const reponer = []

    for (let a in arguments) {
        inventario = inventario.concat(arguments[a])
    }

    for (let i = 0; i < inventario.length; i++) {
        let count = 0
        a1.includes(inventario[i]) ? null : count++
        a2.includes(inventario[i]) ? null : count++
        a3.includes(inventario[i]) ? null : count++

        if (count > 1 && !reponer.includes(inventario[i])) {
            reponer.push(inventario[i])
        }

    }

    return reponer
}





const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']
const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']