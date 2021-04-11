const sqlite3 = require("sqlite3")
const { open } = require("sqlite") // importação apenas da funcionalidade open do sqlite

module.exports = () => open({
    filename: './database.sqlite',
    driver: sqlite3.Database
});