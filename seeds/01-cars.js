
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("car-dealer").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("car-dealer").insert([
        {VIN: "128993918098TGYU2", make: 'Toyota', model:"RV4", mileage:50600,},
        {VIN: "858793918098TGYU2", make: 'BMW', model:"X3", mileage:80092,},
        {VIN: "128993918098ABCD2", make: 'Tesla', model:"X", mileage:56560,},
      ]);
    });
};
