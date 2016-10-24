process.env.NODE_ENV = process.env.NODE_ENV || 'test';

const chai = require('chai');
// const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');

describe('routes : search', () => {

  beforeEach((done) => {
    done();
  });

  afterEach((done) => {
    done();
  });

  describe('GET /search', () => {
    it('should render the search', (done) => {
      chai.request(server)
        .get('/search')
        .end((err, res) => {
          res.redirects.length.should.equal(0);
          res.status.should.equal(200);
          res.type.should.equal('text/html');
          res.text.should.include('<input type="text" name="keyword" class="validate">');
          done();
        });
    });
  });

  describe('GET /search', () => {
    it('should poplulate the page with search results when given a valid body', (done) => {
      chai.request(server)
        .get('/search')
        //add in form data here
        .send({
          location: 'Austin'
        })
        .send({
          keyword: 'beer'
        })
        .end((err, res) => {
          // res.redirects.length.should.equal(1);
          res.status.should.equal(200);
          res.type.should.equal('text/html');
          res.text.should.include('<li class="collection-item avatar">');
          done();
        });
    });
  });
  describe('GET /search/details/:google_places_id', () => {
    it('should show the details for a specific search item', (done) => {
      chai.request(server)
        .get('/search/details/ChIJ7dgNbsvLRIYRFhpmxL4qLVA')
        .end((err, res) => {
          res.status.should.equal(200);
          res.type.should.equal('text/html');
          res.text.should.include('Scubaland Adventures');
          done();
        });
    });
  });
});
