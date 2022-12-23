function countTime(leds) {
    let count = 0
    let arr = []

    //mientras haya un led apagado repito el procedimiento
    while (leds.some(led => led === 0)) {
        count += 7
        for (let i = 0; i < leds.length; i++) {
            let izq

            if (i == 0) {
                izq = leds.length - 1
            } else {
                izq = i - 1
            }

            if (leds[izq] === 1 && leds[i] === 0) {
                //guardo en un array el índice de los leds que voy a poner en 1
                arr.push(i)
            }
        }
        //pongo en 1 los leds que están en 0 con un led en 1 a su izquierda
        arr.map(i => leds[i] = 1)
        //elimino el índice de los leds apagados del array (ahora están encendidos)
        arr = []
    }

    return count
}








const leds = [0, 1, 1, 0, 1]

countTime(leds) // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]