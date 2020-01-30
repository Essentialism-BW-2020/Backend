exports.up = function(knex) {
    return knex.schema.createTable('profiles', tbl => {
      tbl.increments();
      tbl.string('username').unique().notNullable();
      tbl.string('values').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('profiles');
  };
