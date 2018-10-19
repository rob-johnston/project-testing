const { populate } = require('feathers-hooks-common');
// carry out the deposit
const executeDeposit = (hook) => {
  // convert amount into accounts base

  // patch amount of account
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      populate({
        schema: {
          provider: undefined,
          include: [
            {
              service: 'accounts',
              parentField: 'account',
              childField: '_id',
              nameAs: 'account',
            }
          ]
        }
      }),
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [ executeDeposit ],
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
