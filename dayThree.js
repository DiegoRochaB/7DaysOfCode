// Variáveis iniciais
let secondChoice;
const firstChoice = prompt("Você vai seguir a área de programação Front-End ou Back-End?")
// Decisões
if (firstChoice == "Front-End"){
    secondChoice = prompt("Você vai aprender React ou Vue?");
    if (secondChoice == "React"){
        console.log("Você quer aprender " + firstChoice + " e " + secondChoice);
    } else if (secondChoice == "Vue"){
        console.log("Você quer aprender " + firstChoice + " e " + secondChoice);
    }
} else if (firstChoice == "Back-End"){
    secondChoice = prompt("Você quer aprender C# ou Java?")
    if (secondChoice == "C#") {
        console.log("Você quer aprender " + firstChoice + " e " + secondChoice);
    } else if (secondChoice == "Java"){
        console.log("Você quer aprender " + firstChoice + " e " + secondChoice);
    }
}
// Mais decisões
const thirdChoice = prompt("Você pretende se especializar na sua área escolhida ou virar full-stack?");

// Pergunta as especializações do usuário
let fourthChoice = [];
let i = 0;
while (i <= 0){
    let newChoice = prompt("Tem mais alguma tecnologia que você pretende se especializar ou conhecer?");
    if (newChoice == "" || newChoice == undefined || newChoice == null){
        i++
    } else {
        fourthChoice.push(newChoice);
        alert("Interessante, " + newChoice + " é uma tecnologia bacana, boa sorte!")
        console.log(fourthChoice)
    }
}
// Mensagem final
const finalMessage = alert(`Você vai ser ${firstChoice} e aprenderá ${secondChoice}, além de querer ${thirdChoice} e tem interesse nessas tecnologias: ${fourthChoice}`);