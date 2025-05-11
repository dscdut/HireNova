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
        table.text('name').defaultTo(null);
        table.string('email').notNullable();
        table.string('phone');
        table.text('note').defaultTo(null);
        table.text('summary').defaultTo(null);
        table.text('experiences').defaultTo(null);
        table.text('education').defaultTo(null);
        table.text('certifications').defaultTo(null);
        table.string('resume_file', 500).defaultTo(null);
        table.string('cover_latter', 500).defaultTo(null);
        table
            .enum('status', ['Interview', 'In-Review', 'Hired', 'Rejected'])
            .defaultTo('In-Review');
        table
            .integer('industry_id')
            .unsigned()
            .notNullable()
            .index()
            .references('id')
            .inTable('industries');
        table
            .integer('job_posting_id')
            .unsigned()
            .notNullable()
            .index()
            .references('id')
            .inTable('job_postings');
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
