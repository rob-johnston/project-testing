const getExchangeRates = require('../../helpers/getExchangeRates');
/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  // proxy for a 3rd party API call for currency exchange - would probably want to cache these rates for 1min intervals
  async get (data) {
    return getExchangeRates(data.base);
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
