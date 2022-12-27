function executeCommands(commands) {

    const CPU = {
        MEMO: {
            V00: 0,
            V01: 0,
            V02: 0,
            V03: 0,
            V04: 0,
            V05: 0,
            V06: 0,
            V07: 0,
        },

        MOV: function (a, b) {
            this.MEMO.hasOwnProperty(a)
                ? this.MEMO[b] = this.MEMO[a]
                : this.MEMO[b] = Number(a)
        },
        ADD: function (a, b) {
            this.MEMO[a] = this.MEMO[a] + this.MEMO[b]
            this.MEMO[a] = this.MEMO[a] % 256
            this.MEMO[a] = this.MEMO[a] < 0 ? this.MEMO[a] + 256 : this.MEMO[a]
        },
        DEC: function (v) {
            this.MEMO[v]--
            this.MEMO[v] = this.MEMO[v] % 256
            this.MEMO[v] = this.MEMO[v] < 0 ? this.MEMO[v] + 256 : this.MEMO[v]
        },
        INC: function (v) {
            this.MEMO[v]++
            this.MEMO[v] = this.MEMO[v] % 256
            this.MEMO[v] = this.MEMO[v] < 0 ? this.MEMO[v] + 256 : this.MEMO[v]
        },
        JMP: function (i, index) {
            while (this.MEMO.V00 != 0) {
                for (let j = i; j < index; j++) {
                    let newCommand = commands[j].split(/[ ,]+/)
                    let func = newCommand[0]
                    let param1 = newCommand[1]
                    let param2 = newCommand[2] ? newCommand[2] : func === 'JMP' ? index : null
                    CPU[func](param1, param2)
                }
            }
        },
    }

    commands
        .map((command, index) => {
            let newCommand = command.split(/[ ,]+/)
            let func = newCommand[0]
            let param1 = newCommand[1]
            let param2 = newCommand[2] ? newCommand[2] : func === 'JMP' ? index : null
            CPU[func](param1, param2)
        })


    return [
        CPU.MEMO.V00,
        CPU.MEMO.V01,
        CPU.MEMO.V02,
        CPU.MEMO.V03,
        CPU.MEMO.V04,
        CPU.MEMO.V05,
        CPU.MEMO.V06,
        CPU.MEMO.V07
    ]
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