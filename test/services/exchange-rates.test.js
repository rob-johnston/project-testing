const assert = require('assert');
const app = require('../../src/app');

describe('\'exchangeRates\' service', () => {
  it('registered the service', () => {
    const service = app.service('exchange-rates');

    assert.ok(service, 'Registered the service');
  });
});
