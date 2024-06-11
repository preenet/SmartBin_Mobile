const { Client } = require('pg');

// Database connection details
const client = new Client({
    host: '139.162.62.123',
    port: 5444, // Default PostgreSQL port
    user: 'postgres',
    password: 'postgres',
    database: 'smartbin_db'
});

async function testConnection() {
    try {
        await client.connect(); // Connect to the database
        console.log('Connected to the database successfully.');

        // Execute a test query to fetch some data
        const res = await client.query('SELECT * FROM users LIMIT 1;');
        console.log('Data fetched from the database:', res.rows);
    } catch (err) {
        console.error('Error connecting to the database:', err.stack);
    } finally {
        await client.end(); // Close the database connection
    }
}

testConnection();