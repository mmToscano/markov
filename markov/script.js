const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

let matrizDeTransicao = [[],[],[]];
let matrizDeEstado = [];
let matrizDeResultado = [];



function multiplicar(){
    pegarInfo();
}

function pegarInfo(){
    //loop para pegar a info da matriz de transição
    for(let linha = 0; linha < cs(".matrizDeTransicao tr").length; linha++){
        for(let colunaCelula = 0; colunaCelula < cs(".matrizDeTransicao tr")[linha].querySelectorAll("td").length; colunaCelula++){
            //console.log("linha: " + linha + ", " + "colunaCelula: " + colunaCelula);
            let valorCelula = +cs(".matrizDeTransicao tr")[linha].querySelectorAll("td input")[colunaCelula].value;


            matrizDeTransicao[linha].push(valorCelula);
        }
    }

    //loop para pegar a info da matriz de estado
    for(let count = 0; count < cs(".matrizDeEstado td").length; count++){
        let valorCelula = +cs(".matrizDeEstado td input")[count].value;
        matrizDeEstado.push(valorCelula)
    }

    matrizDeResultado[0] = 0;
    matrizDeResultado[1] = 0;
    matrizDeResultado[2] = 0;
    //multiplicar
    for(let linha = 0; linha < 3; linha++){
        for(let colunaCelula = 0; colunaCelula < 3; colunaCelula++){
            matrizDeResultado[linha] += matrizDeEstado[linha] * matrizDeTransicao[[linha]][colunaCelula];
        }
    }

    console.log(matrizDeResultado)
}