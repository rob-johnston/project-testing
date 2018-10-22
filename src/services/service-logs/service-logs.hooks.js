const { setNow } = require('feathers-hooks-common');
const formatCreatedAtDates = require('../../hooks/formatCreatedAtDates')

module.exports = {
  before: {
    all: [],
    find: [ formatCreatedAtDates ],
    get: [],
    create: [ setNow('createdAt')],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
