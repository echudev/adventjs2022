function canExit(maze) {
    
    const actions = {
        Inicio: function (x, y) {
            actions.Avanzar(x, y)
        },
        Avanzar: function (x, y) {
            console.log(maze[x][y])
        },
        Retroceder: function (x, y) {
            console.log('retrocede', x, y)
        }
    }

    maze.map(x => {
        x.map(y => {
            y === 'S'
                ? actions.Inicio(maze.indexOf(x), x.indexOf(y))
                : null
        })
    })

    return false
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