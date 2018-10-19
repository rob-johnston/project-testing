// Initializes the `deposits` service on path `/deposits`
const createService = require('feathers-mongodb');
const hooks = require('./deposits.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/deposits', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('deposits');

  mongoClient.then(db => {
    service.Model = db.collection('deposits');
  });

  service.hooks(hooks);
};
