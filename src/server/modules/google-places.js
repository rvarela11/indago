const request = require('request');
const baseURI = 'https://maps.googleapis.com/maps/api/place/';
//TODO: make the below work without hardcoding the key;
const key = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyBehx791hFZ10uYgcCoO2KfJ7dYs-BIO44';

const googlePlaces = {

  //sends a query that gets a response containing data about all the places within a 32000 meter radius that match a keyword, sorted by Google's 'prominence' metric.
  nearbySearch: (lat, long, keyword, callback) => {
    request('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + long + '&radius=32000&keyword=' + keyword + '&key=' + key, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        if (body.error_message) {
          console.error('error: ' + body.error_message, 'status: ' + body.status);
          return;
        }
        return callback(JSON.parse(body));
      }
      console.error(error);
      console.log('response status:' + response.statusCode);
    });
  },

  //sends a query that gets a response containing more detailed information about a place by its Google place_id, which is obtained through the nearbySearch or radarSearch methods.
  details: (placeID, callback) => {
    request(baseURI + 'details/json?placeid=' + placeID + '&key=' + key, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        if (body.error_message) {
          console.error('error: ' + body.error_message, 'status: ' + body.status);
          return;
        }
        return callback(JSON.parse(body));
      }
      console.error(error);
      console.log('response status: ' + response.statusCode);
    });
  },

  //sends a query that gets a response the URI of a photo of a place stored in Google's place photos database by Google photoreference key.
  getPhoto: (photoReference, callback) => {
    request(baseURI + 'photo?maxwidth=200&photoreference=' + photoReference + '&key=' + key, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        if (body.error_message) {
          console.error('error: ' + body.error_message + 'status: ' + body.status);
          return;
        }
        return callback(body);
      }
      console.error(error);
      console.log('response status: ' + response.statusCode);
    });
  },

  //sends a query that gets a response that includes up to 200 places matching a Google place type within 32000 meters of the lat and long coordinates.
  radarSearch: (lat, long, type, callback) => {
    //TODO: add support for 'keyword' argument/query
    //add string interpolation format
    request(baseURI + 'radarsearch/json?location=' + lat + ',' + long + '&radius=32000&type=' + type + '&key=' + key, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        if (body.error_message) {
          console.error('error: ' + body.error_message, 'status: ' + body.status);
          return;
        }
        return callback(JSON.parse(body));
      }
      console.error(error);
      console.log('response status:' + response.statusCode);
    });
  },
};

module.exports = googlePlaces;
