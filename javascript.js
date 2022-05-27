//model
let livrosTerror = [];
let livrosFiccao = [];
function adicionar(livros, livro) { 
    livros.push(livro);
}
function alterar(livros, livro, id) {
    livros[id] = livro
}
function deletar(livros, id) {
    livros.splice(id, 1)
}
function listar(livros) {
    return livros
}
function controlar_lista(livros) {
    livros = listar(livros);
    mostrar_lista(livros)
}
function mostrar_cadastro() {
    alert('cadastrar') 
    let nome = prompt('nome do livro');
    let autor = prompt('nome do autor');
    let ano = parseInt(prompt('ano de publicacao do livro '));
    let livro = {
        nome: nome,
        autor: autor,
        ano: ano 
    };
    return livro
}
function mostrar_edicao() {
    let id = parseInt(prompt('Qual id quer editar?'))
    let livro = livros[id]
    let nome = prompt(`nome do livro? [${livro.nome}]`); 
    if (nome == '') {
        nome = livro.nome        
    } 
    let autor = prompt(`nome do autor? [${livro.autor}]`);
    if (autor == '') {
        autor = livro.autor        
    } 
    let ano = prompt(`ano  do livro? [${livro.ano}]`);
    if (ano == '') {
        ano = livro.ano        
    }
    let livroNovo = {
        nome: nome,
        autor: autor,
        ano: ano
    };
    return [livroNovo, id]
    
}
function mostrar_delete() {
    let id = parseInt(prompt('Qual id quer apagar?'))
    return id 
}

function cadastrar(livros) {
    let livro = mostrar_cadastro()
    adicionar(livros, livro)
}
//model
function calcularIdade(ano) {
    let idade = new Date().getFullYear() - ano;
    return idade;
}
function mostrar_lista(livros) {
    //view
    alert('listar')
    let mensagem = '';
    let id = 0;
    for (let livro of livros) {
        let idade = calcularIdade(livro.ano )
        mensagem += id + ':' + livro['nome'] + '-' + livro.autor + ':' + livro.ano + 'publicado há ' + idade + '\n';
        id++ ;
    }
    alert(mensagem);
}   
function editar(livros) {
    controlar_lista(livros)
    //control and view
    let [livroNovo, id] = mostrar_edicao()
    
    //model
    alterar(livros, livroNovo, id)
    
}  
function apagar(livros) {
    controlar_lista(livros)
    //control and view
    let id = mostrar_delete() 
    //model
    deletar(livros, id)
    
}
function menu() {
    loop:
        while (true) {
            //view
            alert('1:cadastrarFiccao\n2:lista\n3:editar\n4:apagar\n5:cadastrar terror\n6:listar terror\n7:sair');
            //control and view
            opcao = prompt('');
            //control
            switch (opcao) {
                case '1': 
                    cadastrar(livrosFiccao)
                    break
                case '2': 
                    controlar_lista(livrosFiccao)

                    break
                case '3':
                    editar(livrosFiccao)
                    break
                case '4':
                    apagar(livrosFiccao)
                    break
                case '5':
                    cadastrar(livrosTerror)
                    break
                case '6':
                    controlar_lista(livrosTerror)
                    break                
                case '7': 
                    alert('sair')
                    break loop;
            }
        }
}


