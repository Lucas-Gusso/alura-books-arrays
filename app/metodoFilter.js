// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
// const btnFiltrarLivrosDeBack = document.getElementById('btnFiltrarLivrosBack');
// const btnFiltrarLivrosDeDados = document.getElementById('btnFiltrarLivrosDados');

// btnFiltrarLivrosDeFront.addEventListener('click',filtrarLivrosFront);
// btnFiltrarLivrosDeBack.addEventListener('click',filtrarLivrosBack);
// btnFiltrarLivrosDeDados.addEventListener('click',filtrarLivrosDados);

const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibeLivrosFiltrados(livrosFiltrados);
}

function exibeLivrosFiltrados(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = ''

    listaDeLivros.forEach(livro => {
        
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>
            `

    });
}

// function filtrarLivrosFront() {
//     filtrarLivros('front-end');
// }

// function filtrarLivrosBack() {
//     filtrarLivros('back-end');
// }

// function filtrarLivrosDados() {
//     filtrarLivros('dados');
// }