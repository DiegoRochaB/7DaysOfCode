// variaveis
let listaFruta = []
let listaLaticinio = []
let listaCongelados = []
let listaDoces = []
let listaOutros = []
let newItem;
let typeOfBuy;
let wishToBuy;
let i = 0;

// Inicio dos prompts
while (i == 0){
    wishToBuy = prompt("Você deseja adicionar uma comida a sua lista de compras? Responda com sim ou não");
    if (wishToBuy == "sim"){
        typeOfBuy = prompt("Qual categoria a sua comida se encaixa? frutas, laticinios, congelados, doces ou outros?");
        if (typeOfBuy == "frutas"){
            newItem = prompt("Digite o nome da fruta:")
            listaFruta.push(newItem);
        } else if (typeOfBuy == "laticinios"){
            newItem = prompt("Digite o nome do laticinio:")
            listaLaticinio.push(newItem);
        } else if (typeOfBuy == "congelados"){
            newItem = prompt("Digite o nome do congelado:")
            listaCongelados.push(newItem);
        } else if (typeOfBuy == "doces"){
            newItem = prompt("Digite o nome do doce:")
            listaDoces.push(newItem);
        } else if (typeOfBuy == "outros"){
            newItem = prompt("Digite o nome da outra coisa:")
            listaOutros.push(newItem);
        }
    } else if (wishToBuy == "não" || wishToBuy == "" || wishToBuy == undefined || wishToBuy == null || wishToBuy == isNaN){
        i++
        alert("Aqui está a sua lista de compras: \nFrutas: " + listaFruta + "\nLaticinios: " + listaLaticinio + "\nCongelados: " + listaCongelados + "\nDoces: " + listaDoces + "\nOutros: " + listaOutros);
    }
}