const db = require('../data/dbConfig')

module.exports = {
    get,
    findById,
    filtering,
    insert,
    removeUser
}

function get(){
    return db('users')
}

function findById(id){
    return db('users').where({ id }).first()
}

function filtering(login) {
    return db('users').where(login).first()
}

async function insert(user) {
    const [id] = await db('users').returning(user);
    return findById(id);
  }

function removeUser(id){
    return db('users').where({ id }).delete("*");
}