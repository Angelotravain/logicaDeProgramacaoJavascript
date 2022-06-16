function sequenciaFibonacci() {
    let entrada = 0;
    let entrada1 = 1;
    let i = 0;
    var numReal = 0;
    let text = '';
    var numero = document.getElementById('textEnter').value;
    var p = document.querySelector('#exitText');
    for (i = 0; i <= numero; i++) {
        i = entrada + entrada1;
        entrada = entrada1 + i;
        entrada1 = i + entrada;
        if (i == numero || entrada == numero || entrada1 == numero) {
            numReal = numero;
            console.log(numReal);
        } if (numReal === numero) {
            text = 'O número ' + numero + ' pertence a sequência de fibonacci!';
            p.innerHTML = text;
        } else if (numReal !== numero) {
            text = ('O número ' + numero + ' não pertence a sequência de fibonacci!');
            p.innerHTML = text;
        }
    }
}
