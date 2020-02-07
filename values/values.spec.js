const request = require('supertest');
const server = require('../index.js');

describe("values-router.js", () => {
  describe("GET /values", () => {
    test("did it return 200 status?", async () => {
      await request(server)
      .get("/values")
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
  })
});

describe("values-router.js", () => {
  describe("POST /users", () => {
    test("should authenticated user and allow post to values db", async () => {
      await request(server)
      .post("/values")
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
  })
});