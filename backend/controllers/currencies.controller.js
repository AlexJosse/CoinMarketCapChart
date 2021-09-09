const {
    getCurrencyTicker,
  } = require('../services/currencies.service');
  
    /**
     * Get currency by their iids (BTC, ETH, etc) data
     */
    const getCurrencyTickerHAndler = async (_req, res, next) => {
    try {
        const { ids, interval } = req.body.params;
        const data = await getCurrencyTicker(ids, interval);
        res.status(200).send(data);
    } catch (err) {
        next(err);
    }
    };
  
  module.exports = {
    getCurrencyTickerHAndler,
  };
  