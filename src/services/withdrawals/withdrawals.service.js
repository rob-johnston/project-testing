// Initializes the `withdrawals` service on path `/withdrawals`
const createService = require('feathers-mongodb');
const hooks = require('./withdrawals.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/withdrawals', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('withdrawals');

  mongoClient.then(db => {
    service.Model = db.collection('withdrawals');
  });

  service.hooks(hooks);
};
