process.env.NODE_ENV = process.env.NODE_ENV || 'test';

const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../../src/server/server');
const knex = require('../../src/server/db/connection');

chai.use(chaiHttp);

var agent = chai.request.agent(server);

describe('routes : plans', () => {

  beforeEach((done) => {
    agent.post('/users/login')
      .send({
        email: 'margo',
        password: 'password',
      })
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
        done();
      });
  });

  afterEach((done) => {
    done();
  });

  describe('GET /plans', () => {
    it('should render the plans', (done) => {
      chai.request(server)
        .get('/plans')
        .end((err, res) => {
          res.type.should.equal('text/html');
          // expect(res.text).to.contain('All Plans');
          done();
        });
    });
  });

  describe('POST /users/:user_id/plans/new', () => {
    it('should add a new plan to the database', (done) => {
      agent.post('/users/2/plans/new')
        .send({
          name: 'New Plan 5',
          location: 'Austin',
          date: '07/08/2017',
          keyword : 'barbecue',
        })
        .end((err, res) => {
          if(err) {
            console.error(err);
          }
          knex('plans')
            .where({
              name: 'New Plan 5',
            })
            .first()
            .then((data) => {
              data.should.not.be.undefined;
              data.name.should.equal('New Plan 5');
              done();
            });
        });
    });
  });

  describe('POST /users/:user_id/plans/:plan_id/places/new', () => {
    it('should add a new place to the database with column plan_id equaling the :plan_id param', (done) => {
      agent.post('/users/2/plans/1/places/new')
        .send({
          name: 'Stiles Switch',
          address: '6066 N Lamar Blvd',
          city: 'Austin',
          state: 'TX',
          zipcode: '78751',
        })
        .then((err, res) => {
          knex('places').where({
            name: 'Stiles Switch',
          }).then((data) => {
            data.length.should.equal(1);
            done();
          });
        });
    });
  });
});
