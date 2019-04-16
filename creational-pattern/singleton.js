export class Database {
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