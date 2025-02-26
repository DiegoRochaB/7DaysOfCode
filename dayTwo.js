// Variáveis
let i = 0;
let x = 0;
let y = 0;
let z = 0;

// Prompts

let nome = prompt("Qual o seu nome?");
while (x == 0){ // Loop para checkar a entrada, não é um check completo apenas um básico
    if (nome == NaN || nome == "" || nome == undefined || nome == null){
        alert("Por favor, digite o seu nome corretamente.");
        nome = prompt("Qual o seu nome?");
    } else {
            x++
}}

let idade = prompt("Qual a sua idade?");
while (y == 0){ // Loop para checkar a entrada, não é um check completo apenas um básico
    if (idade == NaN || idade == "" || idade == null || idade == undefined){
        alert("Por favor, digite a sua idade corretamente.");
        idade = prompt("Qual a sua idade?");
    } else {
        y++
    }
}

let linguagem = prompt("Qual linguagem de programação você está estudando?");
while (z == 0){ // Loop para checkar a entrada, não é um check completo apenas um básico
    if (linguagem == NaN || linguagem == "" || linguagem == null || linguagem == undefined){
        alert("Por favor, digite a linguagem que está aprendendo corretamente.");
        linguagem = prompt("Qual linguagem de programação você está estudando?");
    } else {
        z++
    }
}
// Resultado dos prompts

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

// Desafio Opcional
while (i == 0){
    let userLike = prompt("Você gosta de " + linguagem + "? Responda com número 1 para SIM ou 2 para NÃO");
    if (userLike == 1){
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
        i++;
    } else if (userLike == 2){
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
        i++;
    }
}