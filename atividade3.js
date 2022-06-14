const diasFaturamento = {
    dia1: 22174.1664, dia2: 24537.6698, dia3: 6139.6134, dia4: 0.0, dia5: 0.0, dia6: 26742.6612, dia7: 0.0, dia8: 42889.2258, dia9: 46251.174,
    dia10: 11191.4722, dia11: 0.0, dia12: 0.0, dia13: 3847.4823, dia14: 373.7838, dia15: 2659.7563, dia16: 48924.2448, dia17: 18419.2614,
    dia18: 0.0, dia19: 0.0, dia20: 35240.1826, dia21: 43829.1667, dia22: 18235.6852, dia23: 4355.0662, dia24: 13327.1025, dia25: 0.0,
    dia26: 0.0, dia27: 25681.8318, dia28: 1718.1221, dia29: 13220.495, dia30: 8414.61
};

let somaValor = 0;
let somaDia = 0;
let mediaMensal = 0;
let menorValor = 0;
let maiorValor = 0;
let maiorMediaDia = 0;
let diaMenor;
let diaMaior;

valorFaturamento(diasFaturamento);


console.log('O menor valor de faturamento ocorrido em um dia do mês foi de :' + menorValor + ' Ocorreu no ' + diaMenor + '.');
console.log('O maior valor de faturamento ocorrido em um dia do mês foi de :' + maiorValor + ' Ocorreu no ' + diaMaior + '.');
console.log('A média mensal foi de :' + mediaMensal + ' Desconsiderando os valores zerados' + '.');
console.log('Os dias que o faturamento foi maior que a média mensal foram: ' + maiorMediaDia + ' Dias.');

function valorFaturamento(entrada) {

    for (var i in entrada) {
        if (entrada[i] !== 0) {
            somaValor += entrada[i];
            somaDia++;
            if (entrada[i] > maiorValor) {
                maiorValor = entrada[i].toFixed(2);
                diaMaior = i;
            }
        }
        if (entrada[i] < maiorValor) {
            menorValor = entrada[i].toFixed(2);
            diaMenor = i;

        }
    }
    mediaMensal = (somaValor / somaDia).toFixed(2);
    for (var i in entrada) {
        if (entrada[i] > mediaMensal) {
            maiorMediaDia++;
        }
    }
}
