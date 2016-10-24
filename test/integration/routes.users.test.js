process.env.NODE_ENV = process.env.NODE_ENV || 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');
const agent = chai.request.agent(server);

describe('signup page', () => {

  it('should exist', (done) => {
    chai.request(server)
      .get('/users/signup')
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });

  it('form on page', (done) => {
    chai.request(server)
      .get('/users/signup')
      .end((err, res) => {
        res.text.should.include('</form>');
        done();
      });

  });

  it('last name field', (done) => {
    chai.request(server)
      .get('/users/signup')
      .end((err, res) => {
        res.text.should.include('name="last_name"');
        done();
      });

  });

  it('email field', (done) => {
    chai.request(server)
      .get('/users/signup')
      .end((err, res) => {
        res.text.should.include('name="email"');
        done();
      });

  });

  it('password field', (done) => {
    chai.request(server)
      .get('/users/signup')
      .end((err, res) => {
        res.text.should.include('input type="password"');
        done();
      });

  });
});

describe('login page', () => {

  it('should exist', (done) => {
    chai.request(server)
      .get('/users/login')
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });

  it('form on page', (done) => {
    chai.request(server)
      .get('/users/login')
      .end((err, res) => {
        res.text.should.include('</form>');
        done();
      });

  });


  it('email field', (done) => {
    chai.request(server)
      .get('/users/login')
      .end((err, res) => {
        res.text.should.include('name="email"');
        done();
      });

  });

  it('password field', (done) => {
    chai.request(server)
      .get('/users/login')
      .end((err, res) => {
        res.text.should.include('input type="password"');
        done();
      });

  });
});
