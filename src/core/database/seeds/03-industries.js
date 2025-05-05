/**
 * @param {import("knex")} knex
 */

exports.seed = knex => knex('industries')
    .del()
    .then(() => knex('industries').insert([
        { name: 'Software Development' },
        { name: 'Artificial Intelligence' },
        { name: 'Cybersecurity' },
        { name: 'Cloud Computing' },
        { name: 'Data Science' },
        { name: 'E-commerce' },
        { name: 'Game Development' },
    ]));
