function canExit(maze) {
    let start = []
    maze.map((horizontal, h) => horizontal.map((vertical, v) => {
        vertical === 'S' ? start.push(h, v) : null
    }))

    

    console.log(start)
}


canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
]) // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

// canExit([
//     [' ', ' ', 'W', 'W', 'S'],
//     [' ', ' ', ' ', 'W', ' '],
//     [' ', ' ', ' ', 'W', ' '],
//     ['W', 'W', ' ', 'W', 'W'],
//     [' ', ' ', ' ', ' ', 'E']
// ]) // -> false

  // No hay manera de llegar de [0, 4] a [4, 4]