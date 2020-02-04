exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').del()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        {id: 1, creativity: '', health: '', career: '', community: '',},
      ]);
    });
};
