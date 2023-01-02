function checkPart(part) {
    if (part === part.split('').reverse().join('')) {
        return true
    }
    return !!part.split('').find((char) => {
        let newPart = part.replace(char, '')
        return newPart === newPart.split('').reverse().join('')
    })
}


console.log(checkPart("uwu")) // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")) // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")) // false
// "midu" no puede ser un palíndromo después de eliminar un carácter


//Esta es mi mejor solución, con 160 puntos