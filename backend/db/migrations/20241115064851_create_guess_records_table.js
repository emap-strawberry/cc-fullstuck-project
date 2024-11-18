exports.up = function (knex) {
  return knex.schema.createTable("guess_records", (table) => {
    table.increments("id").primary();
    table.string("user_name").defaultTo("Anonymous");
    table.integer("guess").notNullable().checkBetween([100, 999]); // 3桁の数値
    table.timestamp("created_at").defaultTo(knex.fn.now()); // 作成日時
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("guess_records");
};
