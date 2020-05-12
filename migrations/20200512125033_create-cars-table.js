exports.up = function (knex) {
  return knex.schema.createTable("car-dealer", (tbl) => {
    //primary key, called id, auto increments, not null
    tbl.increments();
    tbl.string("VIN", 17).notNullable().unique();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("transmission type");
    tbl.string("status");
  });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("car-dealer");
};
