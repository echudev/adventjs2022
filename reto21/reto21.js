function printTable(gifts) {
    const regalos = ['Gift', ...gifts.map(gift => gift.name)]
    const cantidad = ['Quantity', ...gifts.map(gift => gift.quantity.toString())]
    let regaloMasLargo = [...regalos].sort((a, b) => b.length - a.length)[0].length
    let cantidadMasLarga = [...cantidad].sort((a, b) => b.length - a.length)[0].length
    let headerGift = '| Gift ' + ' '.repeat(regaloMasLargo - 4)
    let headerQuantity = '| Quantity ' + ' '.repeat(cantidadMasLarga - 8) + '|'
    let separadorLeft = '| ' + '-'.repeat(regaloMasLargo)
    let separadorRight = '-'.repeat(cantidadMasLarga) + ' |'

    const tableGenerator = () => {
        let table = ''
        for (let i = 1; i < regalos.length; i++) {
            let regalo = regalos[i]
            let cant = cantidad[i]
            table = table
                .concat('| ')
                .concat(regalo)
                .concat(' '.repeat(regaloMasLargo - regalo.length))
                .concat(' | ')
                .concat(cant)
                .concat(' '.repeat(cantidadMasLarga - cant.length))
                .concat(' |')
            i === regalos.length - 1 ? null : table = table.concat('\n')
        }
        return table
    }
    
    let top = '+'.repeat(regaloMasLargo + cantidadMasLarga + 7)
    let header = headerGift + headerQuantity
    let separador = separadorLeft + ' | ' + separadorRight
    let table = tableGenerator()
    let bottom = '*'.repeat(regaloMasLargo + cantidadMasLarga + 7)

    return top + '\n' + header + '\n' + separador + '\n' + table + '\n' + bottom
}


console.log(printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
]))
//   +++++++++++++++++++
//   | Gift | Quantity |
//   | ---- | -------- |
//   | Game | 2        |
//   | Bike | 1        |
//   | Book | 3        |
//   *******************


console.log(printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
]))
//   ++++++++++++++++++++++++++++++++++++++
//   | Gift               | Quantity      |
//   | ------------------ | ------------- |
//   | PlayStation 5      | 9234782374892 |
//   | Book Learn Web Dev | 23531         |
//   **************************************