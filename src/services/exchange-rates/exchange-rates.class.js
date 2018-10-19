/* eslint-disable no-unused-vars */

const usdBaseResponse = {
  base: 'usd',
  rates: {
    'eur': 0.87,
  }
};

const eurBaseResponse = {
  base: 'eur',
  rates: {
    usd: 1.15
  }
};

class Service {
  constructor (options) {
    this.options = options || {};
  }

  // proxy for a 3rd party API call for currency exchange - would probably want to cache these rates for 1min intervals
  async get (id, params) {
    if(params.base === 'usd') {
      return usdBaseResponse;
    }
    return eurBaseResponse;
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
