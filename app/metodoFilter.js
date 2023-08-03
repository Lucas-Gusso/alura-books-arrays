const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarLivrosPorDisponibilidade() : filtrarLivrosPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);
    if (categoria =='disponivel') {
        const valorTotal = calculaValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveis(valorTotal);
    }
}

function filtrarLivrosPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarLivrosPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveis(v) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${v}</span></p>
    </div>    
    `
}