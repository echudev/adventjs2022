function checkJump(heights) {
    let dir = 'up'
    let res = true
    heights.map((height, i) => {
        if (dir === 'up') {
            if (heights[i + 1] < height) {
                dir = 'down'
            }
        }
        if (dir === 'down') {
            if (heights[i + 1] >= height) {
                return res = false
            }
        }
    })

    return (res && dir==='down')
}






const heights = [1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
const heights3 = [1, 2, 1]
//const heights = [1, 2, 3, 2, 1, 2, 3]
console.log(checkJump(heights)) // true
console.log(checkJump(heights3)) // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2

*/

const heights2 = [1, 7, 3, 5]
console.log(checkJump(heights2)) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3

*/