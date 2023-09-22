function calculadora(peso1, altura2, imc){
    let valor1 = peso1;
    let valor2 = altura2;
    let calcular = imc;
    let resultado;


    // IMC = 80 kg ÷ (1,80 m × 1,80 m) = 24,69 kg/m2 (Peso ideal
//IMC = Peso ÷ (Altura × Altura)


    switch (calcular) {
        case "SIM":
        resultado = peso1 / (altura2 * altura2);
        break;

        case "NÃO":
            default:
                console.log('ERRO: A opção informada não é válida.');
                break;
    }

    if(resultado != undefined)
        return resultado;
    else
        return false;
}