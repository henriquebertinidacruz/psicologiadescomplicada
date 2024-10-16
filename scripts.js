async function carregarArtigo(nomeArquivo) {
    try {
        const resposta = await fetch(`articles/${nomeArquivo}`);
        const artigo = await resposta.json();

        const conteudo = document.getElementById('conteudo');
        conteudo.innerHTML = `
            <h2>${artigo.titulo}</h2>
            <p><em>Autor: ${artigo.autor}</em></p>
            <p>${artigo.data}</p>
            <div>${artigo.conteudo}</div>
        `;
    } catch (erro) {
        console.error("Erro ao carregar o artigo:", erro);
        document.getElementById('conteudo').innerHTML = "<p>Erro ao carregar o artigo.</p>";
    }
}