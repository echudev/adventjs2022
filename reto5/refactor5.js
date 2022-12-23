function getMaxGifts(giftsCities, maxGifts, maxCities) {
    return giftsCities
        .reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]])
        .filter(cities => cities.length > 0)
        .filter(cities => cities.length <= maxCities)
        .map(conj => conj.reduce((a, b) => a += b))
        .filter(cities => cities <= maxGifts)
        .reduce((res, item) => item > res ? res = item : res, 0)
}
//1-busco todas las combinaciones posibles 
//2-Limito las combinacioes al máximo indicado por el parámetro máxCities
//3-Sumo todas las combinaciones filtradas
//4-Filtro las combinaciones que hayan superado el máximo indicado en maxGifts
//5-Busco el mayor entre todos los resultados


const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)) // 20
