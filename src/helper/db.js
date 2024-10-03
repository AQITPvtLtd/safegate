import mysql from "mysql2/promise"; 

// Create a connection pool instead of a single connection
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "safegate",
  waitForConnections: true,
  connectionLimit: 10, // Set connection pool limit
  queueLimit: 0, // Disable queue limit to avoid potential blocking
  acquireTimeout: 10000, // Set acquire timeout to 10 seconds
  connectTimeout: 10000, // Set connection timeout to 10 seconds
  multipleStatements: true // Enable multiple statements per query
});

// Keep-alive function (optional, if you want to manually ping)
async function keepAlive() {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    console.log("Connection to MySQL server is alive.");
    connection.release();
  } catch (err) {
    console.error("Error pinging MySQL server:", err);
  } finally {
    // Schedule the next keep-alive ping after a suitable interval (e.g., 30 seconds)
    setTimeout(keepAlive, 30000);
  }
}

// Uncomment this line if you want to manually initiate keep-alive pings
// keepAlive();

export default pool;
