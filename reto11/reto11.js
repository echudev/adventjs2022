function getCompleted(part, total) {

    const regex = /[^:\d']+|\d+/g

    const partArr = part.match(regex)
    const totalArr = total.match(regex)
    let partInSeconds = 0
    let totalInSeconds = 0
  

    //calculo los segundos totales de "part"
    partArr.map((s, i) => {
        switch (i) {
            case 0:
                //paso horas a segundos
                partInSeconds += Number(s) * 3600
                break
            case 1:
                //paso minutos a segundos
                partInSeconds += Number(s) * 60
                break
            case 2:
                //estos ya son segundos
                partInSeconds += Number(s)
                break
            default:
                console.log('algo salió mal')
                break
        }
    })

    //calculo los segundos totales de "total"
    totalArr.map((s, i) => {
        switch (i) {
            case 0:
                //paso horas a segundos
                totalInSeconds += Number(s) * 3600
                break
            case 1:
                //paso minutos a segundos
                totalInSeconds += Number(s) * 60
                break
            case 2:
                //estos ya son segundos
                totalInSeconds += Number(s)
                break
            default:
                console.log('algo salió mal')
                break
        }
    })

    //calculo el máximo común divisor
    const maximoComunDivisor = (a, b) => {
        let temporal; //Para no perder b
        while (b !== 0) {
            temporal = b
            b = a % b
            a = temporal
        }
        return a
    }
    let mcd = maximoComunDivisor(partInSeconds, totalInSeconds)

    
    return partInSeconds/mcd+'/'+totalInSeconds/mcd
}













getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5