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

// Este código tem o propósito de verificar se um número de CPF é válido. Vou explicar o código linha por linha:

// -> function validarCPF(strCPF) {: Isso define uma função chamada validarCPF que aceita um argumento strCPF, que deve ser uma string contendo um número de CPF.

// -> var Soma;: Declara uma variável chamada Soma que será usada para calcular a soma de produtos.

// -> var Resto;: Declara uma variável chamada Resto que será usada para calcular o resto da divisão.

// -> Soma = 0;: Inicializa a variável Soma com o valor 0.

// -> if (strCPF == "00000000000") return false;: Verifica se o CPF é igual a "00000000000" e, se for, retorna false. Isso é um caso especial para CPFs inválidos.

// -> for (i=1; i<=9; i++) {: Inicia um loop for que itera de 1 a 9. Este loop é usado para calcular a soma de produtos.

// -> Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);: Dentro do loop, a cada iteração, ele pega o caractere da string strCPF na posição i-1 (lembrando que o índice em JavaScript começa em 0) e o converte em um número inteiro usando parseInt(). Esse número é multiplicado por 11 - i e adicionado à variável Soma.

// -> };: Fecha o loop for.

// -> Resto = (Soma * 10) % 11;: Calcula o resto da divisão de Soma * 10 por 11.

// -> if ((Resto == 10) || (Resto == 11)) Resto = 0;: Verifica se o Resto é igual a 10 ou 11 e, se for, define Resto como 0.

// -> if (Resto != parseInt(strCPF.substring(9, 10))) {return false};: Verifica se o Resto calculado não é igual ao nono dígito do CPF (que está na posição 9 da string strCPF). Se não for igual, a função retorna false.

// -> Soma = 0;: Reinicializa a variável Soma com o valor 0.

// -> for (i = 1; i <= 10; i++): Inicia outro loop for, desta vez de 1 a 10. Este loop é usado para calcular outra soma de produtos.

// -> Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);: Dentro deste loop, ele faz um cálculo semelhante ao loop anterior, mas multiplicando os dígitos do CPF pelas posições inversas (12 - i).

// -> };: Fecha o segundo loop for.

// -> Resto = (Soma * 10) % 11;: Calcula o resto da divisão de Soma * 10 por 11.

// -> if ((Resto == 10) || (Resto == 11)) Resto = 0;: Verifica se o Resto é igual a 10 ou 11 e, se for, define Resto como 0.

// -> if (Resto != parseInt(strCPF.substring(10, 11))) {return false};: Verifica se o Resto calculado não é igual ao décimo dígito do CPF (que está na posição 10 da string strCPF). Se não for igual, a função retorna false.

// -> return true;: Se a função não retornou false em nenhum dos pontos anteriores, isso significa que o CPF é válido, e a função retorna true.

// -> Em resumo, esse código implementa uma validação simplificada de CPF, verificando se o número fornecido é válido com base em cálculos matemáticos específicos para CPFs brasileiros.