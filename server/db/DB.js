/*
* This class is suppose to only handle the connection to your DB.
* It is very generic class that returns a promise once your DB is connected
* This class doesn't know anything of the underlying implementation of the DB,
* that's DAOs Job. They will handle specific DB implementations in a consistent way
* */

class DB {
    constructor(DB, DAO) {
        this.db = db;
        this.DAO = DAO;
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.db.connect();
        });
    }

    disconnect() {
        return new Promise((resolve, reject) => {
            this.db.disconnect();
        })
    }
}

module.exports = DB;