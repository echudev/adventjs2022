function getOptimalPath(path) {
    let i = 0
    let res = 0
    path
        .map(level => {
            res += Math.min(...level.slice(i, i + 2))
            i = level.indexOf(Math.min(...level.slice(i, i + 2)))
        })
    return res
}





//getOptimalPath([[0], [2, 3]]) // 2
// 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// 0 -> 4 -> 1

//getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1