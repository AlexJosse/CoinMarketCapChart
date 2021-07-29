const axios = require("axios");
const options = require('../utils/config')
/**
 * Get Rest Test
 */
 /* const getCollections = async () => {
     
    try {
    const url = '/cryptocurrency/listings/latest'
    const data = await axios.get(`${process.env.API_URL}${url}`,
      {
        params: {
          start: 1,
          limit: 5000,
          convert: 'USD'
      }
    }, {
      headers: {
                  'Host': 'pro-api.coinmarketcap.com',
                  'X-CMC_PRO_API_KEY': '07a306f1-ebed-4b2f-8d6e-a5045173f0a7',
              }
    })
    console.log('-------------------');
    console.log(data.data);
    console.log('-------------------');
    return (data.data);
    } catch(err) {
        throw(err)
    }
  }; */

  /**
 * Get Rest Test
 */
 const getCollections = async () => {
     
  const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
  },
  headers: {
    'X-CMC_PRO_API_KEY': '07a306f1-ebed-4b2f-8d6e-a5045173f0a7'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log('API call response:', response.data[0]);
  return response.data[0];
}).catch((err) => {
  console.log('API call error:', err.message);
  return err.message;
});
};
  
  module.exports = {
    getCollections,
  };