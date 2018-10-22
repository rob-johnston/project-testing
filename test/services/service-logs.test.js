const assert = require('assert');
const app = require('../../src/app');

describe('\'service-logs\' service', () => {
  it('registered the service', () => {
    const service = app.service('service-logs');

    assert.ok(service, 'Registered the service');
  });
});
