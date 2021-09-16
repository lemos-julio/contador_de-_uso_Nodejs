const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const calculo = require("./public/Js/calculo")
const Post = require("./models/db.js/Imp")



    /*Configuração para utilizar CSS*/ 
     app.use(express.static('public'));


    //Config
    //Tamplete enginie
      app.engine('handlebars', handlebars({defaultLayout: 'main'}));
      app.set('view engine', 'handlebars');
    //
    
    
    //Config para puxar infos do HMLT (req.body do Express)
      app.use(express.json())
      app.use(express.urlencoded({extended: true}))


    /*Rota para o Formulário*/
    app.get('/cad', function(req, res,next){
      res.render(__dirname + "/views/layouts/form");
    })
    
      
    // Rota Para Cadastro de Formulário no Mysql
      app.post('/form', function(req, res){

           Post.create({
            NOME_IMP: req.body.impname,

            SETOR: req.body.setor,

            CONT_OLD: req.body.oldcont,

            CONT_NEW: req.body.newcont

            /*CONT_USO: calculo*/

            


          })


        
      })




  app.listen(8081)