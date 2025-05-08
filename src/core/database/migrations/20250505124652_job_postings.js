// @ts-check
/**
 * @param {import("knex")} knex
 */
const tableName = 'job_postings';
exports.up = async knex => {
    await knex.schema.createTable(tableName, table => {
        table.increments('id').primary();
        table
            .integer('user_id')
            .unsigned()
            .notNullable()
            .index()
            .references('id')
            .inTable('users');
        table
            .integer('industry_id')
            .unsigned()
            .notNullable()
            .index()
            .references('id')
            .inTable('industries');
        table.string('title').notNullable();
        table.text('description').defaultTo(null);
        table.string('location', 500).defaultTo(null);
        table.integer('salary_min').defaultTo(null);
        table.integer('salary_max').defaultTo(null);
        table
            .integer('job_description_id')
            .unsigned()
            .notNullable()
            .index()
            .references('id')
            .inTable('job_descriptions');
        table
            .enum('status', ['Pending', 'Processing', 'Completed'])
            .defaultTo('Pending');
        table.string('level').nullable().defaultTo(null);
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
