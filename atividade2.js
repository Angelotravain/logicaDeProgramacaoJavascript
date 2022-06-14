
let entrada = 0;
let entrada1 = 1;
let i = 0;
let numReal = 0;

informarFibonacci(10947);

function informarFibonacci(numero) {

    for (i = 0; i <= numero; i++) {
        i = entrada + entrada1;
        entrada = entrada1 + i;
        entrada1 = i + entrada;
        if (i === numero || entrada === numero || entrada1 === numero) {
            numReal = numero;
        }
    }
    if (numReal === numero) {
        console.log('O número ' + numero + ' pertence a sequência de fibonacci!');

    } else {
        console.log('O número ' + numero + ' não pertence a sequência de fibonacci!');
    }


}
