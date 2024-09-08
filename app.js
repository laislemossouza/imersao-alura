function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // se campoPesquisa for uma string vazia, não retornar nada:
    if (!campoPesquisa) {
        section.innerHTML = "Busca inválida. Você precisa digitar algo."
        return // com return o programa para e não executa mais nada depois disso
    };
    
    // vai transformar o conteúdo digitado no campo em letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase()
        
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    
    //declarando variaveis fora do laço de repetição. variáveis para transformar todo o texto em minusculo
    let iniciativa = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        iniciativa = dado.iniciativa.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        //se titulo includes campoPesquisa
        if (iniciativa.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento HTML para cada item do resultado da pesquisa,
            // incluindo título, autor, descrição e link
            resultados += `
                <div class="item-resultado">
                    <h2>
                         <a href="#" target="_blank">${dado.iniciativa}</a>
                     </h2>                     
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.site} target="_blank">Clique aqui para saber mais</a>
                </div>
             `;
        }    
    }
    // ! é negação
    if (!resultados) {
        // se resultados não existirem, faça:
        resultados = "<p>Desculpe, não encontramos este termo. :(</p>"
    }  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}