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

function insert(user) {
    return db("users").insert(user).returning(["id", "username", "type"]);
  }

function removeUser(id){
    return db('users').where({ id }).delete("*");
}