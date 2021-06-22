var botao = document.querySelector("#abrir-modal");
var modal = document.querySelector(".modal-content")
var fechar = document.querySelector(".fechar-id");
var nome = document.querySelector('#nomePersonagem')
var data = document.querySelector('#data')
var campos = document.querySelectorAll('.personagem');

let tabela = document.getElementById("tabela");

//consumindo a API
url = "https://swapi.dev/api/people";

fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results);

        for(const personagem of data.results){
            item = document.createElement('tr');
            item.innerHTML = '<td>' + personagem.name + '</td><td>' + personagem.gender + '</td>';
            console.log(personagem.name)
            tabela.appendChild(item);
        }

    })

//inserir um novo personagem
function iniciaModal(modal){
    var modalAbrir = document.querySelector(modal)
    modalAbrir.classList.add('mostrar');
    nome.value = "";
    data.value = "";
    botaoDesabilitado()
    //sempre resetar os valores
    
}
//fechar
function removerModal(){
    modal.classList.remove('mostrar');
}
botao.addEventListener('click', () => iniciaModal(".modal-content"));
fechar.addEventListener('click', removerModal);


//parte de validaçao
var salvar = document.getElementById("salvar")

//funcao de validaçao dos dois campos
function validarCampos(input){
    
   
    var filled = true;
    for (var element of input){
        if(element.value === "") {
            filled = false;
        }
      
    };
    return filled;
      
    
}
function botaoHabilitado(){
    salvar.style.backgroundColor = "#42a5f5";
    salvar.style.cursor = "pointer";
    salvar.style.color = "#ffffff";
    salvar.style.boxShadow = "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)"
}
function botaoDesabilitado(){
    salvar.style.backgroundColor = "#DFDFDF";
    salvar.style.cursor = "default";
    salvar.style.color = "#9F9F9F";
    salvar.style.boxShadow = "none"
}
//aplicando a função aos dois campos
for(var el of campos){
    
    el.addEventListener('keyup', function(){
        if(validarCampos(campos)){
            salvar.disabled = false;
            botaoHabilitado();
        }else{
            salvar.disabled = true;
            botaoDesabilitado();
        }
    });
};
// inserindo novos dados na tabela
salvar.addEventListener('click', function(){
    removerModal();
    console.log(nome.value + "\n" + data.value)
    novoItem = document.createElement('tr');
    novoItem.innerHTML = '<td>' + nome.value + '</td><td>' + data.value + '</td>';
    tabela.appendChild(novoItem);
    
    
})




//habilitar o botao
// conteudo2 = data.value;
// nome.addEventListener("input", function(event){
//     var conteudo = nome.value;
//     if(conteudo !== null && conteudo !== '' && conteudo2 !== null && conteudo2 !== ''){
//         //habilita o botão
//         console.log(conteudo2)
//         salvar.disabled = false;
//         console.log(salvar.disabled)
//         salvar.style.backgroundColor = "#42a5f5";
//         salvar.style.cursor = "pointer";
//         salvar.style.color = "#ffffff";
//         salvar.style.boxShadow = "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)"
//     }
//     // console.log(conteudo)
// })

// function fazerGet(url){
//     let request = new XMLHttpRequest();
//     request.open("GET", url, false);
//     request.send();
//     return request.responseText;
// }
// function criaLinha(personagem){
//     console.log(personagem.name)
//     linha = document.createElement("tr");
//     tdId = document.createElement("td");
//     tdNome = document.createElement("td");
//     tdId.innerHtml = personagem.tdId;
//     tdNome.innerHtml = personagem.tdNome;

//     linha.appendChild(tdId);
//     linha.appendChild(tdNome);

//     return linha;
// };
// function main(){
//     data = fazerGet();
//     personagens = JSON.parse(data);
//     let tabela = document.getElementById("tabela");
//     console.log(personagens);
//     console.log(personagens.count);
//     // expected output: 42
//     resultados = personagens.results
//     console.log(personagens.results);
//     // expected output: true
//     resultados.forEach(element => {
//         console.log(element);
//         let linha = criaLinha(element);
//         tabela.appendChild(linha);
//     });
    // Para cada personagem ele 
    // cria uma linha e adiciona
    // la na tabela


