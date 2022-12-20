 let num = [5, 6, 1, 8, 3]
 num.push(2)
 num.sort()
 num.push(9)
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
