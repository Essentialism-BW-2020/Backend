const request = require('supertest');
const server = require('../server.js');

describe("users-router.js", () => {
  describe("GET /values", () => {
    test("did it return 401 status, unauthorized user status?", async () => {
      await request(server)
      .get("/values")
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
      .post("/values")
      .then(res => {
        expect(res.status).toBe(401)
      })
    })
  })
});