function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if (campoPesquisa =="") {
    section.innerHTML = "<p>O campo de busca está vazio</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase ()

    console.log(campoPesquisa);

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    resultados += `
    <div class="item-resultado">
        <h3>
            <a href="#" target_blank">${dado.titulo}</a>
        </h3>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Encontre outros aqui</a>
    </div>
`;
}
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
}