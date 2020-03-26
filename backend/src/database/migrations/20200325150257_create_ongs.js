
exports.up = function(knex) {
  //criar uma nova tabela

 return knex.schema.createTable('ongs', function (table){
        table.string('id').primary(); //esse id está string pq serão ids internos da aplicacao
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
     

  });
};

exports.down = function(knex) {
  //metodo para voltar atrás

 return knex.schema.dropTable('ongs');
};
