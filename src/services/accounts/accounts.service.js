// Initializes the `accounts` service on path `/accounts`
const createService = require('feathers-mongodb');
const hooks = require('./accounts.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/accounts', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('accounts');

  mongoClient.then(db => {
    service.Model = db.collection('accounts');
  });

  service.hooks(hooks);
};
