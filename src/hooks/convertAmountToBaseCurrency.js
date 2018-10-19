const convertCurrency = require('../helpers/convertCurrency');

module.exports = function () {
  return async context => {
    const { currency : initialCurrency, amount } = context.data;
    const { currency: accountCurrency } = context.data.account;

    // convert if initial currency doesnt match account currency
    if(initialCurrency !== accountCurrency) {
      context.data.amount = convertCurrency(amount, context.exchangeRates.rates[accountCurrency]);
      context.data.currency = accountCurrency;
    }
    return Promise.resolve(context);
  };
}
