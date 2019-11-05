
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments('id');

      table.text('vin', 255).notNullable()
      table.text('make', 100).notNullable()
      table.text('model', 100).notNullable()
      table.decimal('mileage').notNullable()
      table.text('transmission')
      table.text('status')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
