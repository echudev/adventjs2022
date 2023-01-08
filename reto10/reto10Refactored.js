function checkJump(heights) {
    let dir = 'start'

    return heights.reduce((res, height, i) => {
        if (dir != 'up' && heights[i - 1] < height) {
            res += 1
            dir = 'up'
        }
        if (dir != 'down' && heights[i - 1] > height) {
            res += 1
            dir = 'down'
        }
        //console.log(dir)
        return res
    }, 0) === 2
}



const heights = [1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
console.log(checkJump(heights)) // true


const heights2 = [1, 7, 3, 5]
console.log(checkJump(heights2)) // false


const heights3 = [1, 2, 1]
console.log(checkJump(heights3)) // true