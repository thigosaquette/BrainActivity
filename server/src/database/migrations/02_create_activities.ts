import knex from 'knex';

export async function up(knex:knex) {
    return knex.schema.createTable('activities', table => {
        table.increments('id').primary();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('type').notNullable();


        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex:knex) {
    return knex.schema.dropTable('activities');
}