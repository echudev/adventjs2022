function distributeGifts(packOfGifts, reindeers) {
    let pesoRegalos = packOfGifts.reduce((sum, item) => sum + item.length, 0)
    let soporteRenos = reindeers.reduce((sum, item) => sum + item.length * 2, 0)
    let totalRegalos = soporteRenos/pesoRegalos
    
    return Math.floor(totalRegalos)
}



const packOfGifts = ["book", "doll", "ball2"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2