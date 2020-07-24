
const app = require('../app') 
const supertest = require('supertest')
const request = supertest(app)


describe("GET /posts ", () => {
    test("GET status 200", async () => {
      const response = await request.get("/posts");
      expect(response.message).toEqual("on get request");
      
    });
  });

  