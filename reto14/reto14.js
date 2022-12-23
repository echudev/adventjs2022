function getOptimalPath(path) {
    return path.reduceRight((prev, actual) => {
      return actual.map((v, i) => {
        return v + Math.min(prev[i], prev[i + 1])
      })
    })[0]
  }


//getOptimalPath([[0], [2, 3]]) // 2
// 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// 0 -> 4 -> 1

//getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1