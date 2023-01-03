function distributeGifts(packOfGifts, reindeers) {
    return ((reindeers.join``.length * 2) / packOfGifts.join``.length) >> 0;
}


const packOfGifts = ["book", "doll", "ball2"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2