
async function adicionar(livros, livro) { 
    let r = await fetch('livros/cadastrar') 
    return r.json()
}
function alterar(livros, livro, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            livros[id] = livro
            resolve({ok: true})
        }, 1000);
    })
}
function deletar(livros, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            livros.splice(id, 1)
            resolve({ok: true})
        }, 1000);
    })
}
async function listar(livros) {
    let r = await fetch('livros/listar') 
    return r.json()
}