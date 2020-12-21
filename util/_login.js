/**
 * Login to the Twoday blogger platform
 * ====================================
 * 
 */
const cheerio = require('cheerio');
const { req } = require('./_acceptTerms');
const loginUrl = 'https://www.twoday.net/members/login';

/**
 * Returns a GETs secretKey to be used in a subsequent POST
 */
const getSecretKey = (body, response, resolveWithFullResponse) => {
  let $ = cheerio.load(body);
  return $('[name="secretKey"]').val();
};

/**
 * Returns a GETs secretKey and uri to be used in a subsequent POST
 */
const getSecretKeyAndUri = function (body, response, resolveWithFullResponse) {
  return {
    secretKey: getSecretKey(body, response, resolveWithFullResponse),
    uri: this.uri
  }
};
/**
 * Login to Twoday to establish auth cookie
 * @param void
 * @returns Promise
 */
const loginTwoday = () => {
  return req.get({
    url: loginUrl,
    transform: getSecretKey
  })
    .then(secretKey => {
      return req.post({
        url: loginUrl,
        form: {
          'secretKey': secretKey,
          'popup': '',
          'step': '',
          'isuser': 1,
          'name': process.env.USER,
          'password': process.env.PASSWORD,
          'remember': 1,
          'login': 'Anmelden'
        }
      });
    })
    .catch(err => {
      console.log('Login failed with error:', err);
    });
};

module.exports = { getSecretKey, getSecretKeyAndUri, loginTwoday };