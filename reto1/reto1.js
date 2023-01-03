function wrapping(gifts) {
    return gifts.map(gift => {
      let a = '*'.repeat(gift.length + 2)
      return `${a}\n*${gift}*\n${a}`
    })
  }


console.log(wrapping(['cat', 'marco', 'chota']))
