const db = require('../data/dbConfig.js');


function insert(value) {
  return db('values')
    .insert(value, 'id')
    .then(([id]) => id);
};

function findBy(where) {
  return db('values').where(where);
};


function find() {
  return db('values');
};


function add(value) {
  const [id] = db('values').insert(value)

  return findById(id)
};

function findById(id) {
  return db('values').where({ id }).first('id')
};


function update(id, changes) {
  return db('values')
    .where({ id })
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
};

function remove(id) {
  return db('values')
    .where({ id })
    .del()
};

module.exports = {
  insert,
  findBy,
  find,
  findById,
  add,
  update,
  remove 
};


