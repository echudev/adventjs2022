function getGiftsToRefill(a1, a2, a3) {
    return [...new Set(a1.concat(a2).concat(a3))]
        .filter(i => a1.includes(i) + a2.includes(i) + a3.includes(i) === 1);
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
console.log(gifts)