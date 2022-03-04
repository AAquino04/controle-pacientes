/**
 * Valida peso e altura do paciente
 * @param {object} paciente O elemento do DOM contendo dados do paciente
 * @returns array contendo campos parseados para number 
 * ou campos com valor de null caso não sejam válidos
 */
function validaCampos(paciente) {
    let peso = parseInt(paciente.querySelector(".info-peso").textContent)
    let altura = parseInt(paciente.querySelector(".info-altura").textContent);

    if (peso <= 0 || peso >= 300) {
        paciente.querySelector(".info-peso").textContent = "Peso inválido";
        peso = null;
    }
    if (altura <= 0 || altura >= 3.00) {
        paciente.querySelector(".info-altura").textContent = "Altura inválida";
        altura = null;
    }
    if (peso === null || altura === null) {
        console.log("Dados do paciente " +
            paciente.querySelector(".info-nome").textContent + // Nome do paciente
            " inválidos, cálculo de IMC não realizado!")
    };

    return [peso, altura];
}

/**
 * Calcula o IMC dos paciente e insere no HTML
 * @param {NodeList} pacientes nodelist os objetos de todos os pacientes
 */
function calculaIMC(pacientes) {
    pacientes.forEach(paciente => {
        [peso, altura] = validaCampos(paciente);
        if (peso === null || altura === null) {
            paciente.querySelector(".info-imc").textContent = "Campos inválidos";
            return;
        }

        const imc = peso / (altura ** 2);
        paciente.querySelector(".info-imc").textContent = imc;
    });
}