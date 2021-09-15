const db = require ('./db')

const Post = db.sequelize.define('CONT_USO',{
    NOME_IMP:{
        type:db.Sequelize.STRING
    },
    SETOR:{
        type: db.Sequelize.STRING
    },
    CONT_OLD:{
        type: db.Sequelize.INTEGER
    },
    CONT_NEW:{
        type: db.Sequelize.INTEGER
     },
    CONT_USO:{
        type: db.Sequelize.INTEGER
    }

    

})

module.exports = Post

/*Post.sync({force: true})*/