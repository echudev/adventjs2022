function selectSleigh(distance, sleighs) {
    return sleighs.reduce((acc, cur) =>
        cur.consumption * distance > 20 ? acc : cur.name, null)
}




const distance = 30
const sleighs = [
    { name: "Dasher", consumption: 0.3 },
    { name: "Dancer", consumption: 0.5 },
    { name: "Rudolph", consumption: 0.7 },
    { name: "Midu", consumption: 1 }
]

selectSleigh(distance, sleighs) // => "Dancer"