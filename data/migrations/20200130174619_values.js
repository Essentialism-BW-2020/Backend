exports.up = function(knex) {
    return knex.schema.createTable('values', tbl => {
      tbl.increments();
      tbl.string('creativity').notNullable();
      tbl.string('health').notNullable();
      tbl.string('career').notNullable();
      tbl.string('community').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('values');
  };