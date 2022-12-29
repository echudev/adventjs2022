function howManyReindeers(reindeerTypes, gifts) {

    return gifts.map(gift => {
        let sortedTypes = reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity)
        let reindeers = [...sortedTypes.map(reno => {
            return { type: reno.type, num: 0 }
        })]
        while (gift.weight > 0) {
            sortedTypes.map((reno) => {
                if (gift.weight >= reno.weightCapacity) {
                    gift.weight -= reno.weightCapacity
                    reindeers.find(obj => {
                        obj.type === reno.type ? obj.num++ : null
                    })
                }
            })
        }
        return {
            country: gift.country,
            reindeers: reindeers.filter(obj => obj.num !== 0).reverse()
        }
    })
}


const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
]

const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
]


//No puede haber más eléctricos que a gasolina            --> if electricos > gasolina 
//No puede haber más a gasolina que a diésel              --> if gasolina > diésel
//Siempre habrá un tipo de reno con capacidad de carga 1. --> bueno(?
//Siempre habrá al menos dos tipos de renos disponibles.  --> ok
//La debe devolver los renos ordenados por capacidad de carga de mayor a menor. --> sort

console.log(howManyReindeers(reindeerTypes, gifts))
  // [{
  //   country: 'Spain',
  //   reindeers: [
  //     { type: 'Electric', num: 1 },
  //     { type: 'Gasoline', num: 3 },
  //     { type: 'Diesel', num: 5 }
  //   ]
  // }, {
  //   country: 'France',
  //   reindeers: [
  //     { type: 'Electric', num: 1 },
  //     { type: 'Gasoline', num: 1 },
  //     { type: 'Diesel', num: 2 }
  //   ]
  //  }, {
  //   country: 'Italy',
  //   reindeers: [
  //     { type: 'Electric', num: 3 },
  //     { type: 'Gasoline', num: 3 },
  //     { type: 'Diesel', num: 5 }
  //   ]
  // }]