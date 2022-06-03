function mostrar_cadastro() {
    alert("cadastrando") 
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
    for (let livro of livros) {
        let idade = calcularIdade(livro.ano )
        let linha = document.createElement('tr')
        let coluna = document.createElement('td')
        let coluna2 = document.createElement('td')
        let coluna3 = document.createElement('td')
        let coluna4 = document.createElement('td')
        let coluna5 = document.createElement('td')
        coluna.innerText = id
        coluna2.innerText = livro.nome
        coluna3.innerText = livro.autor
        coluna4.innerText = livro.ano
        linha.appendChild(coluna)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(coluna4)
        tbody.appendChild(linha)
        id++ ;
    }
}