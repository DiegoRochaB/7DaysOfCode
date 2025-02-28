// Variáveis
let i = 3; // Loop
let tentativas = 2;
let randomNumber = parseInt(Math.random() * 11); // Numero aleatorio
let myGuess; // Chute do usuário
console.log(randomNumber); // For cheaters

while (i => 0){
    myGuess = prompt("Qual número você gostaria de chutar?");
    if (myGuess == randomNumber){
        alert("Parabéns, você acertou!");
        break
    } else {
        if (tentativas == 0){
            alert("Você errou e não possui mais tentativas, mais sorte da próxima vez! A resposta era: " + randomNumber);
            break
        } else {
            alert("Você errou, tente de novo! Você tem mais " + tentativas + " tentativas.");
            i--;
            tentativas--;
        }

    }
}
