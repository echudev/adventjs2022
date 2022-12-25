function carryGifts(gifts, maxWeight) {
    return gifts.join(' ')
        .match(new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g')) || [];
}

//1- une los elementos del array en un solo string, separados por una tabulación ' '
//2- busca todas las cadenas que tengan entre 1 y maxWeight de carácteres



//usando Regex queda mucho más simple :) 
//A veces es conveniente utilizar expresiones regulares para trabajar con strings 


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