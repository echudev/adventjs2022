function carryGifts(gifts, maxWeight) {
    let saco = []
    let res = [] 

    gifts = gifts.filter(gift => gift.length <= maxWeight)
    while (gifts.length > 0) {
        if (gifts[0].length + saco.flat().join('').length > maxWeight) {
            res.push(saco.join(' ').trimEnd())
            saco = []
            saco.push(gifts.splice(0, 1))
        } else {
            saco.push(gifts.splice(0, 1))
        }
    }
    saco.push(gifts.splice(0, 1))
    res.push(saco.join(' ').trimEnd())

    return res.filter(item => item !== '')
}

//1- agarro el primer elmento de gifts (gifts.splice(0,1))
//2- agarro un saco vacio (array) y pregunto si la suma del length del saco y el elemento supera al maxWeight
//3- si supera, cierro el saco (lo pusheo a res) y meto el elemento en un saco nuevo
//4- si no supera, meto el elemento en el saco actual y agarro el elemento que sigue


console.log(carryGifts(['toy', 'toy', 'toy', 'toy'], 2))
//expected = 

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10))
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7))
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4))
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

//console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6))
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro