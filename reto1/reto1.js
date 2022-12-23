function wrapping(gifts) {

    const wrappedGifts = gifts.map(gift => {
        let top = ''
        let bot = ''
        for (let n=0; n<=gift.length+1; n++) {
            top += '*'
            bot += '*'
        }
        return `${top}\n*${gift}*\n${bot}`
    })

    return wrappedGifts
}


wrapping(['cat', 'marco', 'chota'])
