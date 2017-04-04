var chai = require('chai')
var chaiHttp = require('chai-http');
var server = require('../app')
chai.use(chaiHttp);
var should = chai.should()

describe('Routes', () => {
  it('should return a json with the property title Express', (done) => {
    chai.request(server)
      .get('/')
      .end((error, response) => {
        response.should.have.status(200)
        done()
      })
  })
})
x
