import mysql from 'promise-mysql';


const pool = mysql.createPool({
    host: 'localhost',
    port: 3600,
    user: 'root',
    password: 'admin',
    database: 'apliweb'
});
export default pool;