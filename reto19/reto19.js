function sortToys(toys, positions) {
    let coso = []
    for (let i = 0; i < positions.length; i++) {
        let obj = {}
        obj['id'] = positions[i]
        obj['name'] = toys[i]
        coso.push(obj)
    }

    return coso
        .sort((a, b) => a.id - b.id)
        .map(item => item.name)
}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

console.log(sortToys(toys, positions))
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

console.log(sortToys(moreToys, morePositions))
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']