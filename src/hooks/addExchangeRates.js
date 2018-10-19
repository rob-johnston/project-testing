module.exports = function (base = '') {
  return async context => {
    // either infer needed exchange rates from the amount, the base or default to euro
    const baseCurrency = context.data.currency || base || 'eur';
    context.exchangeRates = await context.app.service('exchange-rates').get({ base: baseCurrency});
    return Promise.resolve(context);
  };
};
