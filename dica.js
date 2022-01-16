// Ao salvar os dados do usuário
// salve no seguinte formato
// nome=${nome}&email=${email}&senha=${senha}

// Ao ler os dados do arquivo utilize a função split
// da seguinte forma
// let [nome, email, senha] = conteudo.split('&')
// let valorNome = nome.split('=')[1]
// let valorEmail = email.split('=')[1]
// let valorSenha = senha.split('=')[1]

// EXEMPLO

function lerArquivo() {
    const conteudo = 'nome=Glayson&email=glayson@email.com&senha=glayson'
    let [nome, email, senha] = conteudo.split('&')
    let valorNome = nome.split('=')[1]
    let valorEmail = email.split('=')[1]
    let valorSenha = senha.split('=')[1]
    const usuario = {
        nome: valorNome,
        email: valorEmail,
        senha: valorSenha,
    }
}

function salvaArquivo() {
    const usuario = {
        nome: 'Glayson',
        email: 'glayson@email.com',
        senha: 'glayson',
    }
    const conteudo = `nome=${usuario.nome}&email=${usuario.email}&senha=${usuario.senha}`
}