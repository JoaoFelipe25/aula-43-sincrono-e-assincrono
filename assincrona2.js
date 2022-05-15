//asynchronus
async function somar(n1, n2) {

    let soma;

    setTimeout(() =>{

        soma = n1 + n2;

        console.log("soma: ", soma)
    },5000)

}

function subtrair(n1, n2) {

    return n1 - n2;
}

function multiplicar(n1, n2) {

    return n1 * n2;
}

function dividir(n1, n2) {

    return n1 / n2;
}

async function calculos(){

    let a = 30
    let b = 10

    await somar(a, b);

    var subtracao = subtrair(a, b);

    var multiplicacao = multiplicar(a, b);

    var divisao = dividir(a, b);

    
    console.log("subtracao: ",subtracao)
    console.log("multiplicacao: ",multiplicacao)
    console.log("divisao: ",divisao)
}

calculos()