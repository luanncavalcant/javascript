function mostrar_cadastro() {
    let nome = document.querySelector('#nome').value;
    let autor = document.querySelector('#autor').value;
    let ano = document.querySelector('#ano').value;
    let livro = {
        nome: nome,
        autor: autor,
        ano: ano 
    };
    return livro
}


function mostrar_lista(livros) {
    let mensagem = '';
    let id = 0;
    let tbody = document.querySelector('#tbody');
    tbody.innerHTML = '';
    for (let livro of livros) {
        let idade = calcularIdade(livro.ano )
        let linha = document.createElement('tr')
        let coluna = document.createElement('td')
        let coluna2 = document.createElement('td')
        let coluna3 = document.createElement('td')
        let coluna4 = document.createElement('td')
        let coluna5 = document.createElement('td')
        let botao = document.createElement('button')
        coluna.innerText = id
        coluna2.innerText = livro.nome
        coluna3.innerText = livro.autor
        coluna4.innerText = livro.ano
        coluna5.innerHTML = `<button onclick="deletar(livrosFiccao, ${id})">apagar</button>`
        botao.innerText = 'editar';
        botao.onclick = function (id) {
            return function () {
                controlar_edicao(livrosFiccao, id)
            }
        } (id);
        linha.appendChild(coluna)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(coluna4)
        linha.appendChild(coluna5)
        coluna5.appendChild(botao)
        tbody.appendChild(linha)
        id++ ;
    }
}

function mostrar_resultado(resultado) {
    let mensagem = document.querySelector('#mensagem');
    mensagem.innerHTML = resultado.ok;
    if (resultado.ok) {
        mensagem.classList.add('certa') 
        mensagem.classList.remove('errado') 
    }
    else {
        mensagem.classList.add('errado')
        mensagem.classList.remove('certa') 
    }
}