//1. Adicionar os IDS nos botões (CSS) do 1 ao 4
//2. Selecionar os botões
//3. Interceptar o evento de clique
//4. Recuperar o ID adicionado

//Selecionando a UL da lista
const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes");

//Adicionando o escutador de eventos
listaOpcoes.addEventListener("click", indentificarOpcoes);

//Executando a função após o clique
function indentificarOpcoes(event)
{
    //Identificando onde ocorreu o clique
    const elemento = event.target;

    //Verificando se é um li
    if(elemento.tagName == "LI")
    {
        //Recuperando o ID
        const id = elemento.id;

        //Selecionando uma seção utilizando o ID que o usuário escolher
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`);

        //Removendo classe mostrar
        removeClasseMostrar();

        //Adicionar uma classe
        secaoEscolha.classList.add("mostrar");
    }

}

//Função para remover as classes das divs
function removeClasseMostrar()
{
    const divs = document.querySelectorAll(".secaoTransacao .container div");

    for(let i = 0; i < divs.length; i++)
    {
        divs[i].classList.remove("mostrar");
    }
}