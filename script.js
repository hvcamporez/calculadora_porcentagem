// Entrada de dados
const valor = parseFloat(prompt("Informe o valor:"));
const porcentagem = parseFloat(prompt("Informe a porcentagem:"));

// Cálculo do valor da porcentagem
const valorPorcentagem = (porcentagem * valor) / 100;

// Cálculo do desconto e dos juros
const valorDesconto = valor - valorPorcentagem;
const valorJuros = valor + valorPorcentagem;

// Saída dos resultados
document.write(`${valor} com ${porcentagem}% de desconto é ${valorDesconto}<br>`);
document.write(`${valor} com ${porcentagem}% de juros é ${valorJuros}`);
