const axios = require("axios");

const getCurrencyTicker = async () => {
    axios.get("https://api.nomics.com/v1/currencies/ticker?key=your-key-here&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
    .then(response => console.log(response));
};
    
module.exports = {
      getCollections,
};