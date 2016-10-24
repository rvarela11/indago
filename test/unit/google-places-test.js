process.env.NODE_ENV = process.env.NODE_ENV || 'test';

const should = require('chai').should();
const googlePlaces = require('../../src/server/modules/google-places.js');

describe('the google places module', () => {
  xdescribe('radarSearch method', () => {
    it('should return an object with the proper keys', (done) => {
      googlePlaces.radarSearch('51.503186', '-0.126446', 'museum', (body) => {
        body.should.have.all.keys('html_attributions', 'results', 'status');
        body.results[0].should.have.all.keys('geometry', 'id', 'place_id', 'reference');
        done();
      });
    });
  });
  xdescribe('details method', () => {
    it('should return an object with the proper keys', (done) => {
      googlePlaces.details('ChIJN1t_tDeuEmsRUsoyG83frY4', (body) => {
        body.should.have.all.keys('html_attributions', 'result', 'status');
        body.result.should.have.all.keys('address_components', 'adr_address', 'formatted_address', 'formatted_phone_number', 'geometry', 'icon', 'id', 'international_phone_number', 'name', 'opening_hours', 'photos', 'place_id', 'rating', 'reference', 'reviews', 'scope', 'types', 'url', 'utc_offset', 'vicinity', 'website');
        done();
      });
    });
  });
  xdescribe('nearbySearch method', () => {
    it('should return an object with the proper keys', (done) => {
      googlePlaces.nearbySearch('-33.8670522', '151.1957362', 'food', (body) => {
        body.should.have.all.keys('html_attributions', 'next_page_token', 'results', 'status');
        body.results[0].should.have.keys('geometry', 'icon', 'id', 'name',
          'opening_hours', 'place_id', 'rating', 'scope', 'reference', 'types', 'vicinity');
        done();
      });
    });
  });
});
