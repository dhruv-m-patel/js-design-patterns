class Database {
  constructor(connectionString) {
    if (Database.connected) {
      return Database.instance;
    }

    this._connectionString = connectionString;
    Database.instance = this;
    Database.connected = true;
    return this; 
  }

  getConnectionString() {
    return this._connectionString;
  }

  setConnectionString(newConnectionString) {
    this._connectionString = newConnectionString;
  }
}

const postgreSQL = new Database('PostgreSQL');
console.log(postgreSQL.getConnectionString()); // Should print PostgreSQL

const sqlServer = new Database('SqlServer');
console.log(sqlServer.getConnectionString()); // Should return same connection string again as setConnectionString was not called
sqlServer.setConnectionString('SqlServer');
console.log(sqlServer.getConnectionString()); // Should now print SqlServer!!! Singleton works :)