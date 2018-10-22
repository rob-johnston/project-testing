const convertCurrency = require('../../helpers/convertCurrency');
const createLog = require('../../hooks/createLog');

const executeTransfer = async (hook) => {
  // unpack info
  const {
    originAccountId,
    destinationAccountId,
    amount, currency
  } = hook.data;

  // grab the two accounts involved
  const originAccount = await hook.app.service('accounts').get(originAccountId);
  const destinationAccount = await hook.app.service('accounts').get(destinationAccountId);

  // convert ammounts to the needed currency for each account
  const amountForOrigin = await convertCurrency(currency, originAccount.currency, amount);
  const amountForDestination = await convertCurrency(currency, destinationAccount.currency, amount);

  // make sure theres enough funds
  if(originAccount.balance < amountForOrigin) {
    throw new Error('insufficient funds to cover transaction');
  }

  // create associated withdrawal and deposit
  await hook.app.service('withdrawals')
    .create({
      account: originAccountId,
      amount: amountForOrigin,
      currency: originAccount.currency,
      transferId: hook.result._id
    });
  await hook.app.service('deposits')
    .create({
      account: destinationAccountId,
      amount: amountForDestination,
      currency: destinationAccount.currency,
      transferId: hook.result._id,
    });

  return hook;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      executeTransfer,
      createLog('transfer')
    ],
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
