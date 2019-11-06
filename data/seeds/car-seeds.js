
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 'kkjn23', make: 'toyota', model: 'subaru', mileage: 3.45 },
        { vin: 'kkjn23', make: 'toyota', model: 'subaru', mileage: 45.45 },
        { vin: 'kkjn23', make: 'toyota', model: 'subaru', mileage: 88.45 }
      ]);
    });
};
