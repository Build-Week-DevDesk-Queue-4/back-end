exports.up = function(knex, Promise) {
    return knex.schema.createTable('tickets', tickets => {
      tickets.increments(); // ticket number
      tickets.integer('user_id').notNullable().references('id').inTable('users'); // submitted by
      tickets.text('description', 500).notNullable();
      tickets.text('urgency').notNullable();
      tickets.text('reply', 500);
      tickets.boolean('solved').notNullable().defaultTo(0); // solved, defaults to false
      tickets.text('category', 128).notNullable();
      tickets.integer('solved_by').references('id').inTable('users');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tickets');
  };