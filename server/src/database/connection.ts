import knex from 'knex';
import path from 'path';



const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;


// Migration = Histórico do banco de dados
// 
// Um usuario cria a tabela points e outro não