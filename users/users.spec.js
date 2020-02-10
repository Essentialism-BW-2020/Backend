const request = require('supertest');
const server = require('../server.js');

describe("users-router.js", () => {
  describe("GET /users", () => {
    test("did it return 401 status?", async () => {
      await request(server)
      .get("/users")
      .then(res => {
        expect(res.status).toBe(401)
      })
    })
  })
});

describe("users-router.js", () => {
  describe("POST /users", () => {
    test("should not allow post to users db", async () => {
      await request(server)
      .post("/users")
      .then(res => {
        expect(res.status).toBe(404)
      })
    })
  })
});