const http = require('http');
const fs = require('fs')
const path = require('path')

function transformaQueryEmObjeto(querystr) {
    if(!querystr) {
        return undefined
    }
    let obj = {}
    querystr.split('&').forEach((chaveValor) => {
        let [nome, valor] = chaveValor.split('=')
        obj[nome] = decodeURIComponent(valor)
    })
    return obj
}

function salvaNoBanco(usuario) {
    fs.writeFileSync(`usuarios/${usuario.nome}`, )
}

/**
 * 
 * @param {http.IncomingMessage} req 
 * @param {http.OutgoingMessage} res 
 */
const requestListener = function (req, res) {
    console.log('method', req.method)
    console.log('recurso', req.url)

    // separa a query do recurso
    let [recurso, query] = req.url.split('?')
    
    // transforma a string em um obj
    query = transformaQueryEmObjeto(query)

    console.log({recurso, query})

    // se tem dados salva no banco de dados
    if (query) {
        salvaNoBanco({
            nome: query.nome,
            email: query.email,
            senha: query.senha
        })
    }

    // pega o recurso da requisição
    recurso = recurso.substring(1, req.url.length)
    // se não tiver o recurso
    if (recurso === '') {
        recurso = 'index.html'
    }
    // pega o cam)inho do arquivo
    const caminho = path.resolve(__dirname, recurso)
    // verifica se o arquivo existe
    if(fs.existsSync(caminho)) {
        res.writeHead(200)
        // le o conteudo do arquivo e passa para a variavel
        const conteudo = fs.readFileSync(path.resolve(__dirname, recurso))
        // se existe envia para o cliente
        res.end(conteudo)
    } else {
        res.writeHead(404)
        res.end()
    }
}

const server = http.createServer(requestListener);
server.listen(8080);