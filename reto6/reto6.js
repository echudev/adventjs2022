function createCube(size) {

    //separo el cubo en dos partes, top y bottom (superior e inferior)
    const topGenerator = (l = 1) => {
        let left = ''
        let right = ''
        let top = ''
        let space = ''
        let sides = l

        //genero la cara derecha superior del cubo
        for (let i = l; i > 0; i--) {
            right += '\\_'
        }

        //genero la cara izquierda superior del cubo y la uno a la derecha
        for (let j = 0; j < l; j++) {
            for (let i = sides; i > 1; i--) {
                space += ' '
            }

            if (j == 0) {
                top = top.concat('', space + '/' + left + right + '\\')
            } else {
                top = top.concat('\n', space + '/' + left + right + '\\')
            }
            left += '\\/'
            space = ''
            sides--
        }

        return top
    }

    const bottomGenerator = (l = 1) => {
        let left = ''
        let right = ''
        let bottom = ''
        let space = ''

        //genero la cara derecha inferior del cubo
        for (let i = l; i > 0; i--) {
            right += '_/'
        }

        //genero la cara izquierda inferior del cubo y la uno a la derecha
        while (l > 0) {
            for (let i = l; i > 0; i--) {
                left += '\\/'
            }
            bottom = bottom.concat('\n', space + left + right)
            l--
            left = ''
            space += ' '
        }

        return bottom
    }

    const top = topGenerator(size)
    const bottom = bottomGenerator(size)

    return top + bottom
}

console.log(createCube(3))

