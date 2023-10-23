const possibleChars = ['[',']','<','>','(',')','{','}']
let output = []
for(let i=0; i<1000; i++){
    output.push(possibleChars[Math.floor(Math.random()*possibleChars.length)])
}
console.log(...output)