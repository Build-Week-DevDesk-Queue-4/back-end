const server = require('../api/server.js');
const request = require('supertest');
const db = require('../data/dbConfig.js');

describe('root', () => {
  test('environment should be testing', () => {
    expect(process.env.DB_ENV).toEqual('testing');
  });
});

describe('GET /', () => {
    
    it('should return 200 ok', async () => {
      const res = await request(server)
      .get('/');
      expect(res.status).toEqual(200);
    });
  
    it('should be json', async () => {
      const res = await request(server)
      .get('/');
      expect(res.type).toEqual('text/html');
    });
  
    it('should return the right object', async () => {
      const res = await request(server)
      .get('/');
      expect(res.body).toEqual({});
    });
});
  
