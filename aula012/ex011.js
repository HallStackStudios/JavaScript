var idade = 22
console.log(`Sua idade é ${idade} e você:`)
if (idade < 16) {
    console.log('Não Vota')
}
else if (idade < 18 || (idade >= 65)) {
    console.log('Voto opicional')
}
else if (idade >= 18) {
    console.log('Vota')
}