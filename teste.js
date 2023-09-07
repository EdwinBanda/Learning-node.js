const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root', 'Edwin@19', {
    host: "localhost",
    dialect: "mysql"
})

const postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

postagem.create({
    titulo: "Titulo qualquer",
    conteudo: "jqrbvlblrvblrblvb1llkubvuilbr13lubvub"
})

const usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

usuario.create({
    nome: "Edwin",
    sobrenome: "Banda",
    idade: 19,
    email: "casemirobanda@gmail.com"
})
// usuario.sync({force: true})

sequelize.authenticate()
    .then(()=>{
        console.log('Conectado com sucesso!')
    })
    .catch((erro)=>{
        console.log("Falha na coneccao!"+erro)
    })
