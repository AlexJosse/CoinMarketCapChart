const {
    getCollections,
  } = require('../services/collections.service');
  
    /**
     * Get collections info
     */
    const getCollectionsHandler = async (_req, res, next) => {
    try {
        const collections = await getCollections();
        console.log('collection:', collections);
        res.status(200).send('dldldl');
    } catch (err) {
        next(err);
    }
    };
  
  module.exports = {
    getCollectionsHandler,
  };
  