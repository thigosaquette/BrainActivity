import knex from 'knex';
import path from 'path';

//migrations, controlam a versão dentro do banco de dados

const db = knex({
    client: 'sqlite3',
    connection: {
        //utilizando_dirname para ter compatibilidade com qualque SO
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;