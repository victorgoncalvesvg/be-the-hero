
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
       
        //relacionameto - coluna pra armazenar qual a ong criou o incidente
        table.string('ong_id').notNullable();

        //chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs'); //a coluna ong id - referencia a coluna id na tabela ongs
     

  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');  
};
