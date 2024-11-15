exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("guess_records").del();
  await knex("guess_records").insert([
    { user_name: "Alice", guess: 123 },
    { user_name: "Bob", guess: 456 },
    { user_name: "Charlie", guess: 789 },
    { guess: 234 }, // user_name: "Anonymous"
    { guess: 567 }, // user_name: "Anonymous"
  ]);
};
