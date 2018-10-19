const { populate, dePopulate } = require('feathers-hooks-common');
const addExchangeRates = require('../../hooks/addExchangeRates')
const convertAmountToBaseCurrency = require('../../hooks/convertAmountToBaseCurrency')

// carry out the deposit
const executeDeposit = async (hook) => {
  await hook.app.service('accounts')
    .patch(
      hook.result.accountId,
      { action: 'deposit',
        amount:   hook.result.amount
      });
  return hook;
}

const moveAccountId = (hook) => {
  hook.data.accountId = hook.data.account;
  return hook;
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      moveAccountId,
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
      addExchangeRates(),
      convertAmountToBaseCurrency(),
      dePopulate(),
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
