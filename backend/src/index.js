const express = require('express'); //importando o módulo express para a variavel express. Agora a variavel possui todas as funcionalidades do express
const cors = require('cors');
const routes = require('./routes');

const app = express(); // criando uma variavel que vai armazenar a minha aplicação /criando a aplicação

app.use(cors()); //modulo de segurança

app.use(express.json());

app.use(routes);
app.listen(3333); // pedindo para a variavel ouvir a porta 3333. quando digitar localhost:3333 acessa a aplicacao


/** 
 * Rotas localhost/users
 * recurso ursers
 */

 /**
  * Métodos HTTP:
  * 
  * GET: buscar/listar alguma informação do back-end
  * POST: criar uma informação no back-end
  * PUT: alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

    /**
     * Tipos de parâmetro:
     *  
     * Query Patms: Parametros nomeados enviados na rota após o "?" (Filtros, paginação)
     * Rout Parms: Parametros utilizados para Identificar recursos
     * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
     */

     /**
      * Comunicação do banco por:
      * Driver: SELECT * FROM users
      * Query Builder: table('users').select('*').where('')
      */




//para executar a aplicacao no cmd "node index.js"

