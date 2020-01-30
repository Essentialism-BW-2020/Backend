
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, colName: 'creativity'},
        {id: 2, colName: 'health'},
        {id: 3, colName: 'career'},
        {id: 4, colName: 'values'}
      ]);
    });
};
