// format from action structure to a patch call
const formatMoneyTransaction = async (hook) => {
  // don't format if we arent changing the balance
  if(!hook.data.action || !hook.data.amount) return hook;

  const account = await hook.app.service('accounts').get(hook.id);

  let updatedAmount = parseInt(account.balance);
  if(hook.data.action === 'deposit') {
    hook.data.balance = updatedAmount + parseInt(hook.data.amount);
  } else if(hook.data.action === 'withdrawal') {
    hook.data.balance = updatedAmount - parseInt(hook.data.amount);
  }
  delete hook.data.amount;
  delete hook.data.action;

  return hook;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [ formatMoneyTransaction ],
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
