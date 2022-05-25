const { Pool } = require('pg');
const { patch } = require('../routes');
const url = require('url');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

let params = { ssl: { rejectUnauthorized: false } };

if (process.env.DATABASE_URL) {
	params.connectionString = process.env.DATABASE_URL;

} else {
	params = {
		user: DB_USER,
		host: DB_HOST,
		password: DB_PASSWORD,
		port: DB_PORT,
		database: DB_DATABASE,
	}
}


console.log(params);
const pool = new Pool(params)


pool.connect().then(() => {
	console.log("Database connection established.")
}).catch(e => {
	throw new Error(e);
})

module.exports = pool;

