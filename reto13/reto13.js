function getFilesToBackup(lastBackup, changes) {
    let res = []
    changes.map((change, i) => {
        if (lastBackup < change[1] && !res.includes(change[0])) {
            res.push(change[0])
        }
    })
    return res.sort((a, b) => a - b)
}
var lastBackup = 1546300800;
var changes = [
    [2, 1546300800],
    [3, 1546301100],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000],
];
getFilesToBackup(lastBackup, changes); // => [ 1, 3 ]
// El archivo con id 1 ha sido modificado dos veces
// después del último backup.
// El archivo con id 2 no ha sido modificado después
// del último backup.
// El archivo con id 3 ha sido modificado una vez
// después del último backup.
// Tenemos que hacer una copia de seguridad
// de los archivos 1 y 3.
