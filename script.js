const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe o valor: ", (valorInput) => {
  const valor = parseFloat(valorInput);

  rl.question("Informe a porcentagem: ", (porcentagemInput) => {
    const porcentagem = parseFloat(porcentagemInput);

    // Cálculo do valor da porcentagem
    const valorPorcentagem = (porcentagem * valor) / 100;

    // Cálculo do desconto e dos juros
    const valorDesconto = valor - valorPorcentagem;
    const valorJuros = valor + valorPorcentagem;

    // Exibição dos resultados
    console.log(`\n${valor} com ${porcentagem}% de desconto é ${valorDesconto}`);
    console.log(`${valor} com ${porcentagem}% de juros é ${valorJuros}`);

    rl.close();
  });
});
