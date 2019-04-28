var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "us-cdbr-iron-east-02.cleardb.net",
        user: "b10a39d393fdc9",
        password: "67dbe2f0",
        database: "/heroku_7a5941f9be76e25"
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