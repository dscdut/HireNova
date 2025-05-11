// @ts-check
/**
 * @param {import("knex")} knex
 */
exports.up = async knex => {
    await knex.schema.createTable('user_roles', table => {
        table.increments('id').unsigned().primary();
        table.integer('user_id').unsigned().notNullable();
        table.integer('role_id').unsigned().notNullable();

        // Thiết lập mối quan hệ giữa user_id và bảng users
        table
            .foreign('user_id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');

        // Thiết lập mối quan hệ giữa role_id và bảng roles
        table
            .foreign('role_id')
            .references('id')
            .inTable('roles')
            .onDelete('CASCADE');

        table.timestamps(true, true); // Tạo cột created_at và updated_at
    });
};

exports.down = knex => knex.schema.dropTable('user_roles');
