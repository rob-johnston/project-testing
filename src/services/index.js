const accounts = require('./accounts/accounts.service.js');
const withdrawals = require('./withdrawals/withdrawals.service.js');
const deposits = require('./deposits/deposits.service.js');
const transfers = require('./transfers/transfers.service.js');
const exchangeRates = require('./exchange-rates/exchange-rates.service.js');
const serviceLogs = require('./service-logs/service-logs.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(accounts);
  app.configure(withdrawals);
  app.configure(deposits);
  app.configure(transfers);
  app.configure(exchangeRates);
  app.configure(serviceLogs);
};
