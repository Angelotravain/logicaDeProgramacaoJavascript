
let novaString = "";


stringEntrada('Obrigado pelo desafio, foi fantástico!');
console.log(novaString);

function stringEntrada(entrada){
    for(let i = entrada.length -1; i>=0; i--){
        novaString += entrada[i];
    }
    return novaString;
}