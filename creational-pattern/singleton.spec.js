import { Database } from './singleton';

describe('singleton', () => {
  test('it should create object only once using singleton', () => {
    const postgreSQL = new Database('PostgreSQL');
    expect(postgreSQL.getConnectionString()).toBe('PostgreSQL');
    
    const sqlServer = new Database('SqlServer');
    expect(sqlServer.getConnectionString()).toBe('PostgreSQL');

    sqlServer.setConnectionString('SqlServer');
    expect(sqlServer.getConnectionString()).toBe('SqlServer');
  });
});