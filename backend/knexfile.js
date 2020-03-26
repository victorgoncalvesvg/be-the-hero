// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'  //colocar o diretório onde será criado o arquivo
    },

    migrations:{
      directory:'./src/database/migrations'
    },
    useNullAsDefault: true,
  },

  /**
   * Banco de dados
   * 
   * Entidades
   *  - ONG
   *  - Casos
   * 
   * Funcionalidades
   *  - Login de ONG
   *  - Logout de ONG
   *  - Cadastro de ONG
   *  - Cadastrar novos casos
   *  - Deletar casos  
   *  - Listar casos específicos de uma ONG
   *  - Listar todos os casos
   *  - Entrar em contato com a ONG
   */

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
