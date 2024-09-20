//codigo ainda sendo feito 
var hora = 19
console.log(`Agora são exatamente ${hora} horas`)
if (hora <= 12) {
    console.log('Bom Dia!')
}
else if (hora >= 12) {
    console.log('Boa tarde!')
    if (hora >= 18) {
        console.log('Boa noite!')
    }
    else {
        console.log('')
    }
}