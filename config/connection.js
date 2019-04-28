var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1Likeomlets",
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) {
        console.error("Connection unsuccessful: " + err.stack);
        return;
    }
    console.log("Connection successful");
});

module.exports = connection;