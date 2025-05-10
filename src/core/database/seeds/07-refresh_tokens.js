/**
 * @param {import("knex")} knex
 */

exports.seed = async knex => {
    const now = new Date();
    const expiresIn7Days = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    await knex('refresh_tokens').del();

    await knex('refresh_tokens').insert([
        {
            user_id: 1,
            token: 'sample_token_1',
            device_info: 'iPhone 13 - Safari',
            created_at: knex.fn.now(),
            expired_at: expiresIn7Days,
        },
        {
            user_id: 2,
            token: 'sample_token_2',
            device_info: 'MacBook Pro - Chrome',
            created_at: knex.fn.now(),
            expired_at: expiresIn7Days,
        },
    ]);
};
