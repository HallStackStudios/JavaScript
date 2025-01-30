var static = 16.24;
var money = 2.0;
while (static <= 364.74) {
    console.log(`Você acabou de ganhar mais $${money.toFixed(2)}, agora você possui $${(static + money).toFixed(2)}`);
    static += money; // Atualiza o saldo
    money += 0.50; // Aumenta o valor ganho a cada loop
}
/* ESTE É O CODIGO SEM USAR O WHILE
console.log("teste de aula de repetição while!")
console.log("teste de aula de repetição while!")
console.log("teste de aula de repetição while!")
console.log("teste de aula de repetição while!")
console.log("teste de aula de repetição while!")
console.log("teste de aula de repetição while!")
*/