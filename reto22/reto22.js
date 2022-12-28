function checkStepNumbers(systemNames, stepNumbers) {
    return systemNames
    .reduce((newArr, name, i) => {
        if (newArr.find(obj => obj.name === name)) {
            newArr.find(obj => obj.name === name).steps.push(stepNumbers[i])
        } else {
            newArr.push({
                name: name,
                steps: [stepNumbers[i]]
            })
        }
        return newArr
    }, [])
    .reduce((res, acc)=> {
        acc.steps.reduce((acc, step) => {
            if (acc < step) {
                acc = step
            } else {
                res = false
            }
            return acc
        }, 0)
        return res
    }, true)
  }
  
  
  const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
  const stepNumbers = [1, 33, 10, 2, 44, 20]
  
  console.log(checkStepNumbers(systemNames, stepNumbers)) // => true
  
  // tree_1 tiene los pasos: [1, 2]
  // tree_2 tiene los pasos: [33, 44]
  // house tiene los pasos: [10, 20]
  
  // true: Los pasos de cada sistema están en orden estrictamente creciente
  



  //checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) // => false
  
  // tree_1 tiene los pasos: [2, 1]
  // house tiene los pasos: [10]
  
  // false: tree_1 tiene los pasos de forma decreciente