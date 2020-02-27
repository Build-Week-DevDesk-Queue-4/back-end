const db = require('../data/dbConfig');

// GET ALL
function find(){
    return db('tickets');
}

// CREATE
function add(ticket){
    return db('tickets').insert(ticket).returning("*");
}

// DELETE
function removeTicket(id){
    return db('tickets').where({ id }).delete();
}

// UPDATE
function update(ticket, id){
    return db('tickets').where({ id }).update(ticket).returning("*");
}

module.exports = {
    find,
    add,
    removeTicket,
    update
}