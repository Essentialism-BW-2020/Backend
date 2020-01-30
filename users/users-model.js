const db = require('../data/dbConfig.js');
const bcrypt = require('bcryptjs');

function insert(user) {
  return db('users')
    .insert(user, 'id')
    .then(([id]) => id);
};

function findBy(where) {
  return db('users').where(where);
};

function findByUsername(username) {
  return findBy({ username }).first();
};

function find() {
  return db('users');
};


function add(user) {
  user.password = bcrypt.hash(user.password, 14)
  const [id] = db('users').insert(user)

  return findById(id)
};

function findById(id) {
  return db('users').where({ id }).first('id')
};


function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
};

function remove(id) {
  return db('users')
    .where({ id })
    .del()
};

module.exports = {
  insert,
  findBy,
  findByUsername,
  find,
  findById,
  add,
  update,
  remove 
};



