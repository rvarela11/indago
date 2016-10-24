process.env.NODE_ENV = process.env.NODE_ENV || 'test';


const chai = require('chai');
// const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.DB_NAME', process.env.DB_NAME);

const server = require('../../src/server/app');

const agent = chai.request.agent(server);

const knex = require('../../src/server/db/connection');

describe('routes : auth', () => {

  beforeEach((done) => {
    done();
  });

  afterEach((done) => {
    done();
  });

  describe('GET /auth', () => {

    xit('should render the auth', (done) => {
      chai.request(server)
        .get('/auth')
        .end((err, res) => {
          res.redirects.length.should.equal(0);
          res.status.should.equal(200);
          res.type.should.equal('text/html');
          done();
        });
    });
  });

  describe('the login page after signup', () => {
    it('should contain a navbar dropdown tab called "my plans", that contains requests to /user/:user_id/[some route]', (done) => {
      agent.post('/users/signup')
        .send({
          first_name : 'Bob',
          last_name : 'Smith',
          email : 'email123@email.com',
          username : 'bob_smith',
          password : 'password',
        })
        .end((err, res) => {
          if(err) {
            console.error(err);
          }
          knex('users')
            .where({
              email : 'email123@email.com',
            })
            .first()
            .then((user) => {
              res.text.should.include('<a href="/users/'+user.id+'/plans/new">');
              done();
            });
        });
    });
  });
});
