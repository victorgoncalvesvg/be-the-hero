const knex = require('knex');

const configuration = require('../../knexfile'); //importar configurações do banco

//criar a conexao
const connection = knex(configuration.development);

//exportar conexao com o bd
module.exports = connection;

//agora é só importar este arquivo nos arquivos que precisa da comunicação com o bd