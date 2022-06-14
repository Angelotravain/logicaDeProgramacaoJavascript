

let estados = { SP: 67836.43, RJ: 36678.66, MG: 29229.88, ES: 27165.48, outros: 19849.53 };

let valorTotal = 0.00;
let percentual;

faturamentoMensal(estados);

function faturamentoMensal(entrada) {
    for (var i in entrada) {
        valorTotal += entrada[i];
    }
    for (var i in entrada) {
        percentual = ((entrada[i] / valorTotal) * 100).toFixed(2);
        if (i === 'outros') {
            console.log('Os ' + i + ' estados correspondem a ' + percentual + '% de representaçõa no valor total de lucros da distribuidora!');
        } else {
            console.log('O estado ' + i + ' corresponde a ' + percentual + '% de representação no valor total de lucros da distribuidora!');
        }
    }
}