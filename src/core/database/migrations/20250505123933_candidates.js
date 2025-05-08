// @ts-check
/**
 * @param {import("knex")} knex
 */
const tableName = 'candidates';
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
        table.text('summary').defaultTo(null);
        table.text('experiences').defaultTo(null);
        table.text('education').defaultTo(null);
        table.text('certifications').defaultTo(null);
        table.string('resume_file', 500).defaultTo(null);
        table
            .integer('industry_id')
            .unsigned()
            .notNullable()
            .index()
            .references('id')
            .inTable('industries');
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
