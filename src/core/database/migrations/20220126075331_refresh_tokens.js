// @ts-check
/**
 * @param {import("knex")} knex
 */

const tableName = 'refresh_tokens';

exports.up = async knex => {
    await knex.schema.createTable(tableName, table => {
        table.increments('id').unsigned().primary();
        table
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index();
        table.string('token').notNullable();
        table.string('device_info').nullable();
        table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
        table.dateTime('expired_at').notNullable();
    });

    await knex.raw(`
        CREATE TRIGGER update_timestamp_refresh_tokens
        BEFORE UPDATE ON ${tableName}
        FOR EACH ROW
        EXECUTE PROCEDURE update_timestamp();
    `);
};

exports.down = knex => knex.schema.dropTable(tableName);
