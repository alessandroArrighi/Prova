import mysql, { Connection } from 'mysql2'

export const connection: Connection = mysql.createConnection({
    host: process.env.DB_URL,
    user: 'root',
    password: 'root',
    database: 'Data'
})