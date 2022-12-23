function checkPart(part) {
    let inverted = ''

    for (let i = part.length - 1; i >= 0; i--) {
        inverted = inverted.concat('', part[i])
    }

    if (part == inverted) {
        return true
    } else {
        for (let i = 0; i < inverted.length; i++) {

            let removed = inverted.replace(inverted[i], '')
            console.log(removed, inverted)
            if (removed == part) {
                return true
            }
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