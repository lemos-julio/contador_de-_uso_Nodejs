/*Conexão MYSQL*/
/*Configuração Conexão com MYSQL*/
    const  Sequelize  = require("sequelize");
    const sequelize = new Sequelize('impressora','root','',{
      host:'localhost',
      dialect: 'mysql'
    })
// 


//Exportando Sequelize
    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }
//