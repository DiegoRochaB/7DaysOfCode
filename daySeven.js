// Variaveis
let i = 0;
let a;
let b;
let resultado;

// Funcoes
function soma(x,y) {
    return x + y
}

function subtracao(x,y) {
    return x - y
}

function divisao(x,y) {
    return x / y
}

function multiplicacao(x,y) {
    return x * y
}

// Loop
while (i <= 0){
    operacao = prompt("Escolha qual operacao voce deseja: Soma, Subtracao, Divisao, Multiplicacao ou Sair");
    switch (operacao){
        case "Soma":
            a = parseFloat(prompt("Digite o primeiro valor da operacao"));
            b = parseFloat(prompt("Digite o segundo valor da operacao"));
            resultado = soma(a,b);
            alert("O resultado foi: " + resultado);
            break;

        case "Subtracao":
            a = parseFloat(prompt("Digite o primeiro valor da operacao"));
            b = parseFloat(prompt("Digite o segundo valor da operacao"));
            resultado = subtracao(a,b);
            alert("O resultado foi: " + resultado);
            break;

        case "Divisao":
            a = parseFloat(prompt("Digite o primeiro valor da operacao"));
            b = parseFloat(prompt("Digite o segundo valor da operacao"));
            resultado = divisao(a,b);
            alert("O resultado foi: " + resultado);
            break;

        case "Multiplicacao":
            a = parseFloat(prompt("Digite o primeiro valor da operacao"));
            b = parseFloat(prompt("Digite o segundo valor da operacao"));
            resultado = multiplicacao(a,b);
            alert("O resultado foi: " + resultado);
            break;

        case "+":
            a = parseFloat(prompt("Digite o primeiro valor da operacao"));
            b = parseFloat(prompt("Digite o segundo valor da operacao"));
            resultado = soma(a,b);
            alert("O resultado foi: " + resultado);
            break;
        
        case "-":
            a = parseFloat(prompt("Digite o primeiro valor da operacao"));
            b = parseFloat(prompt("Digite o segundo valor da operacao"));
            resultado = subtracao(a,b);
            alert("O resultado foi: " + resultado);
            break;

        case "*":
            a = parseFloat(prompt("Digite o primeiro valor da operacao"));
            b = parseFloat(prompt("Digite o segundo valor da operacao"));
            resultado = multiplicacao(a,b);
            alert("O resultado foi: " + resultado);
            break;

        case "/":
            a = parseFloat(prompt("Digite o primeiro valor da operacao"));
            b = parseFloat(prompt("Digite o segundo valor da operacao"));
            resultado = divisao(a,b);
            alert("O resultado foi: " + resultado);
            break;
        
        case "Sair":
            i++;
            break;

        default:
            i++;
            break;
    }
}