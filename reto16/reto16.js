function fixLetter(letter) {
    return letter
        .trim()
        .replace(/(\s+)/g, ' ')
        .replace(/,(?=[^\s])/g, ', ')
        .replace(/\s*([,.?])/g, '$1')
        .replace(/[?]+/g, '?')
        .replace(/santa claus/gi, 'Santa Claus')
        .replace(/([^.?!])$/, '$1.')
        .replace(/((?:[^.?!\s]))([^.?!]*)([.?!])/g,
            (match, p1, p2, p3) => p1.toUpperCase() + p2 + p3)
}


//console.log(fixLetter(` hello ,  how are you??     do you know if santa claus     exists?  i really hope he does!  bye  `))
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

//console.log(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"))
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

console.log(fixLetter('  hi,santa claus. are you there ?   '))
//Hi, Santa Claus. Are you there?