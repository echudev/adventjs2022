function checkPart(part) {
    let invertedPart = ''
    let partArr = []

    for (let i = 0; i < part.length; i++) {
        partArr.push(part[i])
    }
   

    for (let i = partArr.length - 1; i >= 0; i--) {
        invertedPart = invertedPart.concat('', partArr[i])
    }

    if (part == invertedPart) {
        return true
    } else {
        for (let i = 0; i < partArr.length; i++) {
            let part2 = ''
            let invertedPart2 = ''

            let rem = partArr.splice(i, 1)

            for (let j = 0; j < partArr.length; j++) {
                invertedPart2 = invertedPart2.concat('', partArr[j])
            }

            for (let k = partArr.length - 1; k >= 0; k--) {
                part2 = part2.concat('', partArr[k])
            }

            if (part2 == invertedPart2) {
                return true
            }

            partArr.splice(i, 0, rem[0])
        }
    }

    return false
}


console.log(checkPart("uwu")) // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")) // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")) // false
// "midu" no puede ser un palíndromo después de eliminar un carácter