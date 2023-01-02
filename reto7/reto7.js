function getGiftsToRefill(a1, a2, a3) {

    return [].concat(a1, a2, a3).reduce((reponer, gift) => {
        let count = 0
        !a1.includes(gift) ? count++ : null
        !a2.includes(gift) ? count++ : null
        !a3.includes(gift) ? count++ : null

        count > 1 && !reponer.includes(gift)
            ? reponer.push(gift)
            : null
            
        return reponer
    }, [])
}





const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
console.log(gifts)