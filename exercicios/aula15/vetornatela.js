let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores) - com conschetes
/* 
maneira burra de fazer
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

maneira certa, porém ainda não a mais simplificada
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
//maneira mais simplificada, otimizada e atualizada
valores.sort()
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}