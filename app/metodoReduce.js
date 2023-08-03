function calculaValorTotalDeLivrosDisponiveis(livros){
    let livrosComDesconto = aplicarDesconto(livros);
    return livrosComDesconto.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}