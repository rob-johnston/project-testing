// Initializes the `transfers` service on path `/transfers`
const createService = require('feathers-mongodb');
const hooks = require('./transfers.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/transfers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('transfers');

  mongoClient.then(db => {
    service.Model = db.collection('transfers');
  });

  service.hooks(hooks);
};
