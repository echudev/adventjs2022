function getMaxGifts(giftsCities, maxGifts, maxCities) {

    //busco todas las combinaciones posibles 
    const allCombinations = giftsCities.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]])

    //Limito las combinacioes al máximo indicado por el parámetro máxCities
    const citiesLimitCombination = allCombinations.filter(cities => cities.length > 0 && cities.length <= maxCities)

    //Sumo todas las combinaciones filtradas
    const totalGiftsPerCombination = citiesLimitCombination.map(conj => conj.reduce((a, b) => a += b))

    //Busco entre las combinaciones de ciudades la que entregue mayor cantidad de regalos y no supere el limite de "maxGifts"
    let res = 0
    totalGiftsPerCombination.map(a => {
        if (a > res && a <= maxGifts) {
            res = a
        }
    })
   
    return res
}


const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

getMaxGifts(giftsCities, maxGifts, maxCities) // 20
