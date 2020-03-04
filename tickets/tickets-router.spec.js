const server = require("../api/server.js");
const request = require("supertest");

describe('root', () => {
    test('environment should be testing', () => {
      expect(process.env.DB_ENV).toEqual('testing');
    });
  });


describe("tickets router", () => {
    
  it("should return status 400 without auth", async () => {
    const res = await request(server)
    .get("/api/tickets");
    expect(res.status).toBe(400);
  });

  it("should be a json response", async () => {
    const res = await request(server)
    .get("/api/tickets");
    expect(res.type).toBe("application/json");
  });

});
