// Detectar Evento de Click no elemento com id="btn"
document.getElementById("btn").addEventListener("click", () => {

    // Acessar Valor digitado no telefone
    let telefone = document.getElementById("campo_telefone").value;

    // Remover qualquer formatação existente (parênteses, espaços e hífens);
    /* Importante para caso o úsuario digite algo indesejado no campo */
    telefone = telefone.replace(/[\(\)\s-]/g, '');

    // Verificar se o número de telefone possui 10 dígitos
    if (telefone.length !== 11) {
        // Caso Não possua 11 dígitos
        alert("Número de telefone inválido. Deve conter 10 dígitos.");
    } else {
        // Caso tenha 11 dígitos, Aplique a máscara (xx) xxxxx-xxxx
        telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 6)}-${telefone.slice(6)}`;

        // Atualizar o campo de telefone com a máscara
        document.getElementById("campo_telefone").value = telefone;
    };

    
// ==================================================================================

    // Acessar Valor digitado no cpf
    let cpf = document.getElementById("campo_cpf").value;

    // Remover qualquer formatação existente (pontos e hífen)
    /* Importante para caso o úsuario digite algo indesejado no campo */
    cpf = cpf.replace(/[\.-]/g, '');

    // Verificar se o CPF possui 11 dígitos
    if (!validarCPF(cpf) || cpf.length !== 11) {
        alert("CPF inválido.");
        return;
    }

    // Aplicar a máscara xxx.xxx.xxx-xx
    cpf = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;

    // Atualizar o campo de CPF com a máscara
    document.getElementById("campo_cpf").value = cpf;
    
});


// ==================================================================================

// Validar se um cpf real foi digitado

function validarCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;
    
    for (i=1; i<=9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    };

    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;

    if (Resto != parseInt(strCPF.substring(9, 10)) ) {return false};

    Soma = 0;

    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);

    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;

    if (Resto != parseInt(strCPF.substring(10, 11) ) ) {return false};

    return true;
};