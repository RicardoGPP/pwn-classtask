/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    {id: 1, descricao: 'Cerveja', marca: 'Skol', valor: 10},
    {id: 2, descricao: 'Suco', marca: 'Del Vale', valor: 6},
    {id: 3, descricao: 'Refrigerante', marca: 'Dolly', valor: 8}
  ]);
};
