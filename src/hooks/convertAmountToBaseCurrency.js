const multiply = require('../helpers/multiply');

// convert currency given to match the account the action is used on
module.exports = function () {
  return async context => {
    const { currency : initialCurrency, amount } = context.data;
    const { currency: accountCurrency } = context.data.account;

    // convert if initial currency doesn't match account currency
    if(initialCurrency !== accountCurrency) {
      context.data.amount = multiply(amount, context.exchangeRates.rates[accountCurrency]);
      context.data.currency = accountCurrency;
    }
    return Promise.resolve(context);
  };
};
