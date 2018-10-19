// Initializes the `exchangeRates` service on path `/exchange-rates`
const createService = require('./exchange-rates.class.js');
const hooks = require('./exchange-rates.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/exchange-rates', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('exchange-rates');

  service.hooks(hooks);
};
