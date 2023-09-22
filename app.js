// Lista de exercícios - PROGRAMAÇÃO WEB BACK-END (Node.js)
// Professor: Marcel 

// ----------------------------------------------------------------------------------
// Exercício 1 - Um consultório de Nutrição solicitou a você que criasse um sistema -
//  que faça o cálculo de IMC  de uma pessoa                                        -
// ----------------------------------------------------------------------------------

var calculosImc = require('./modulo/calculosImc.js');

var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log('------------ CONSUTÓRIO NUTRIÇÃO ------------');
console.log('-------- IMC ------------ CLASSIFICAÇÃO -----');
console.log(' - Menor do que 18,5 --------- Abaixo do peso');
console.log(' - Entre 18,5 e 24,9 ----------- Peso normal ');
console.log(' - Entre 25 e 29,9 ------------ Acima do peso');
console.log(' - Entre 30 e 34,9 ------------- Obesidade I ');
console.log(' - Entre 35 e 39,9 ------------- Obesidade II');
console.log(' - Maior do que 40 ------------ Obesidade III');
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');

entradaDeDados.question('Digite seu peso: ', function(peso1){
let valor1 = peso1.replace(',','.');

entradaDeDados.question('Digite sua altura: ', function(altura2){
    let valor2 = altura2.replace(',','.');

    entradaDeDados.question('Deseja calcular seu IMC? [SIM | NÃO]', function(calcularImc){
        let calcular = calculosImc;

        if (valor1 == '' || valor2 == ''){
            console.log('ERRO: É obrigatório a entrada de valores.');
        } else if (isNaN(valor1) || isNaN(valor2)){
            console.log('ERRO: É obrigatório a entrada somente de valores númericos.')
        } else {
            let resultado;
            valor1 = Number(valor1);
            valor2 = Number(valor2);

        resultado = calculosImc.calculadora(valor1, valor2, calcular);

            if (resultado)

            console.log(String(resultado.toFixed(2)).replace('.',','));
        }
    })

})
});

// E xercício 2 -  Criar um sistema que gerencie as médias escolas de uma universidade,
//  conforme requisitos abaixo:
  // O sistema deve solicitar a entrada dos seguintes dados:
   // Nome do aluno;
   // Nome do professor;
   // Sexo do professor e do aluno;
   // Nome do curso;
   // Nome da disciplina;
   // 4 notas que podem ser entre 0 a 100;
