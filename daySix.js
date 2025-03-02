// variaveis
let listaFruta = []
let listaLaticinio = []
let listaCongelados = []
let listaDoces = []
let listaOutros = []
let newItem;
let typeOfBuy;
let wishToBuy;
let wishToRemove;
let i = 0;
let index;

// Inicio dos prompts
while (i == 0){
    wishToBuy = prompt("Você deseja adicionar uma comida a sua lista de compras, remover um item ou não para os dois? Responda com adicionar, remover ou não.");
    if (wishToBuy == "adicionar"){
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
    } else if (wishToBuy == "remover"){
        if (listaFruta.length >= 1 || listaLaticinio.length >= 1 || listaCongelados.length >= 1 || listaDoces >= 1 || listaOutros >= 1){
            alert("Aqui está a sua lista de compras: \nFrutas: " + listaFruta + "\nLaticinios: " + listaLaticinio + "\nCongelados: " + listaCongelados + "\nDoces: " + listaDoces + "\nOutros: " + listaOutros + "\nEscolha qual remover:");
            wishToRemove = prompt("Digite o item que deseja remover");
            switch (true) {
                case listaFruta.includes(wishToRemove):
                    index = listaFruta.findIndex(nome => nome == wishToRemove); // find the index of the user typed input, if there is none shows default message
                    listaFruta.splice(index,1); // removes the user typed input
                    break;
    
                case listaLaticinio.includes(wishToRemove):
                    index = listaFruta.findIndex(nome => nome == wishToRemove);
                    listaLaticinio.splice(index,1);
                    break;
    
                case listaCongelados.includes(wishToRemove):
                    index = listaCongelados.findIndex(nome => nome == wishToRemove);
                    listaCongelados.splice(index,1);
                    break;
    
                case listaDoces.includes(wishToRemove):
                    index = listaDoces.findIndex(nome => nome == wishToRemove);
                    listaDoces.splice(index,1);
                    break;
    
                case listaOutros.includes(wishToRemove):
                    index = listaOutros.findIndex(nome => nome == wishToRemove);
                    listaOutros.splice(index,1);
                    break;
                
                default:
                    alert("O item inserido nao esta na lista.")
            }
        } else {
            alert("Nao tem nada na lista.")
        }
    }
}