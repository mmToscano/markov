const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

let matrizDeTransicao = [[],[],[]];
let matrizDeEstado = [];
let matrizDeResultado = [];

function multiplicarMatrizes(){
    //loop para pegar a info da matriz de transição
    for(let linha = 0; linha < cs(".matrizDeTransicao tr").length; linha++){
        for(let colunaCelula = 0; colunaCelula < cs(".matrizDeTransicao tr")[linha].querySelectorAll("td").length; colunaCelula++){
            let valorCelula = +cs(".matrizDeTransicao tr")[linha].querySelectorAll("td input")[colunaCelula].value;


            matrizDeTransicao[linha].push(valorCelula);
        }
    }

    //loop para pegar a info da matriz de estado
    for(let count = 0; count < cs(".matrizDeEstado td").length; count++){
        let valorCelula = +cs(".matrizDeEstado td input")[count].value;
        matrizDeEstado.push(valorCelula)
    }

    //multiplicar matrizes
    matrizDeResultado[0] = 0;
    matrizDeResultado[1] = 0;
    matrizDeResultado[2] = 0;

    for(let linha = 0; linha < 3; linha++){
        for(let colunaCelula = 0; colunaCelula < 3; colunaCelula++){
            matrizDeResultado[linha] += matrizDeEstado[colunaCelula] * matrizDeTransicao[[colunaCelula]][linha];
        }
    }

    //testar para ver se os valores não passam de 1.0

    matrizDeTransicao.forEach((item, index) =>{
        if(somaVetor(item) > 1){
            throw new Error("Value bigger than 1")
        }
    })

    if(somaVetor(matrizDeEstado) > 1){
        throw new Error("Value bigger than 1")
    }

    //atribuir resultado no vetor de resultado
    let vetorDeResultado = cs(".matrizDeResultado td");
    vetorDeResultado[0].innerHTML = matrizDeResultado[0];
    vetorDeResultado[1].innerHTML = matrizDeResultado[1];
    vetorDeResultado[2].innerHTML = matrizDeResultado[2];
}

function somaVetor(array) {
    return array[0] + array[1] + array [2];
}