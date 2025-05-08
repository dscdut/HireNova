/**
 * @param {import("knex")} knex
 */

exports.seed = async knex => {
    await knex('refresh_tokens').del();

    await knex('refresh_tokens').insert([
        {
            user_id: 1,
            token: 'sample_token_1',
            device_info: 'iPhone 13 - Safari',
            created_at: knex.fn.now(),
            expired_at: knex.fn.now().add(7, 'days'),
        },
        {
            user_id: 2,
            token: 'sample_token_2',
            device_info: 'MacBook Pro - Chrome',
            created_at: knex.fn.now(),
            expired_at: knex.fn.now().add(7, 'days'),
        },
    ]);
};
