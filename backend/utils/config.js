if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
const options =  {
    headers: {
                'X-CMC_PRO_API_KEY': process.env.API_KEY,
            }
  };

module.exports = options;