module.exports = function (base) {
  return async context => {
    // This debugs the service call and a stringified version of the hook context
    // You can customize the message (and logger) to your needs
    context.exchangeRates = await context.app.service('exchange-rates').get({ base: base});
    return Promise.resolve(context);
  };
}
