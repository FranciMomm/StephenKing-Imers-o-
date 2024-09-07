function pesquisar() {

    // Obtém a secao HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

// Obtém o valor do campo de pesquisa
let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

// Verifica se o campo de pesquisa está vazio
if (!campoPesquisa) {
    section.innerHTML = "<p>Não Encontrado</p>";
    return
  }

// Inicializa uma string vazia para armazenar os resultados
let resultados = "";
  
  // Itera sobre cada dado da lista de dados
  for (let dado of dado) {
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let link = dado.link.toLowerCase();

   if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || link.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Comprar Livro</a>
        </div>
      `;
    }
  }

// Se nenhum resultado foi encontrado
if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

// Atribui os resultados gerados à seção HTML
section.innerHTML = resultados;
}