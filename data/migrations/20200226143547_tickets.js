exports.up = function(knex, Promise) {
    return knex.schema.createTable('tickets', tickets => {
      tickets.increments(); // ticket number
      tickets.text('username').notNullable().references('username').inTable('users');
      tickets.integer('user_id').notNullable().references('id').inTable('users'); // submitted by
      tickets.text('description', 500).notNullable();
      tickets.text('urgency').notNullable();
      tickets.text('reply', 500);
      tickets.boolean('solved').notNullable().defaultTo(0); // solved, defaults to false
      tickets.text('category', 128).notNullable();
      tickets.text('solved_by').notNullable().references('username').inTable('users');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tickets');
  };