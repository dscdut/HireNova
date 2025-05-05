// @ts-check
/**
 * @param {import("knex")} knex
 */
const tableName = 'users';
// 123456
const DEFAULT_PASSWORD = '$2b$10$4WxWKojNnKfDAicVsveh7.ogkWOBMV1cvRUSPCXwxA05NRX18F0QW';
exports.up = async knex => {
    await knex.schema.createTable(tableName, table => {
        table.increments('id').unsigned().primary();
        table.string('name');
        table.string('avatar', 500).defaultTo(null);
        table.string('email').unique().notNullable();
        table.string('password').defaultTo(DEFAULT_PASSWORD);
        table.boolean('active').defaultTo(false);
        table.date('birthday').notNullable();
        table.string('phone_number').unique().notNullable();
        table.string('address', 500).defaultTo(null);
        table.string('refresh_token', 500).defaultTo(null);
        table
            .integer('role_id')
            .unsigned()
            .notNullable()
            .index()
            .references('id')
            .inTable('roles');
        table.dateTime('deleted_at').defaultTo(null);
        table.timestamps(false, true);
    });

    await knex.raw(`
   CREATE TRIGGER update_timestamp
   BEFORE UPDATE
   ON ${tableName}
   FOR EACH ROW
   EXECUTE PROCEDURE update_timestamp();
 `);
};

exports.down = knex => knex.schema.dropTable(tableName);
