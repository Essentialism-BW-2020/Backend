const request = require('supertest')
const server = require('./server')


  describe("GET /", () => {
    test("should return a 200 of status OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200)
      })
    })
  })
