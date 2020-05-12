exports.up = function (knex) {
  return knex.schema.createTable("car-dealer", (tbl) => {
    //primary key, called id, auto increments, not null
    // tbl.increments();
    tbl.string("VIN", 17).notNullable().unique();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.string("mileage").notNullable();
    tbl.string("transmission type");
    tbl.string("status");

    // tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("car-dealer");
};
