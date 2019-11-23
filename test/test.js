// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Get Reports data from JSON", () => {
  // Test to get all reports record
  it("should get all records", (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
      });
  });
});