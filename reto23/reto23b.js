function executeCommands(commands) {
    const memoria = {
        V00: 0,
        V01: 0,
        V02: 0,
        V03: 0,
        V04: 0,
        V05: 0,
        V06: 0,
        V07: 0,
    }

    const acciones = {
        MOV: function (a, b) {
            memoria.hasOwnProperty(a)
                ? memoria[b] = memoria[a]
                : memoria[b] = Number(a)
        },
        ADD: function (a, b) {
            memoria[a] = memoria[a] + memoria[b]
            memoria[a] = memoria[a] % 256
            memoria[a] = memoria[a] < 0 ? memoria[a] + 256 : memoria[a]
        },
        DEC: function (v) {
            memoria[v]--
            memoria[v] = memoria[v] % 256
            memoria[v] = memoria[v] < 0 ? memoria[v] + 256 : memoria[v]
        },
        INC: function (v) {
            memoria[v]++
            memoria[v] = memoria[v] % 256
            memoria[v] = memoria[v] < 0 ? memoria[v] + 256 : memoria[v]
        },
        JMP: function (i, index) {
            while (memoria.V00 != 0) {
                for (let j = i; j < index; j++) {
                    let newCommand = commands[j].split(/[ ,]+/)
                    let func = newCommand[0]
                    let param1 = newCommand[1]
                    let param2 = newCommand[2] ? newCommand[2]
                        : func === 'JMP' ? index : null
                    acciones[func](param1, param2)
                }
            }
        },
    }

    commands
        .map((command, index) => {
            let newCommand = command.split(/[ ,]+/)
            let func = newCommand[0]
            let param1 = newCommand[1]
            let param2 = newCommand[2] ? newCommand[2]
                : func === 'JMP' ? index : null
            acciones[func](param1, param2)
        })

    return Object.values(memoria);
}



console.log(executeCommands([
    "MOV 5,V00", // V00 es 5
    "MOV 10,V01", // V01 es 10
    "DEC V00", // V00 ahora es 4
    "ADD V00,V01", // V00 = V00 + V01 = 14
]))

// Output: [14, 10, 0, 0, 0, 0, 0]



console.log(executeCommands([
    'MOV 255,V00', // V00 es 255
    'INC V00',     // V00 es 256, desborda a 0
    'DEC V01',     // V01 es -1, desborda a 255
    'DEC V01'      // V01 es 254
]))

// Output: [0, 254, 0, 0, 0, 0, 0]


console.log(executeCommands([
    'MOV 10,V00', // V00 es 10
    'DEC V00',    // decrementa V00 en 1  <---┐
    'INC V01',    // incrementa V01 en 1      |
    'JMP 1',      // bucle hasta que V00 sea 0 ----┘
    'INC V06'     // incrementa V06 en 1
]))

  // Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]