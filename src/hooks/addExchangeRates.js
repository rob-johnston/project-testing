module.exports = function (base = '') {
  return async context => {
    const baseCurrency = base || context.data.currency;
    context.exchangeRates = await context.app.service('exchange-rates').get({ base: baseCurrency});
    return Promise.resolve(context);
  };
}
