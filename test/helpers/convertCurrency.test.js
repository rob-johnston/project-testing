const convertCurrency = require('../../src/helpers/convertCurrency');
const { assert } = require('chai');

// use some fixed default rates that you can provide to the currency converter
const exRates = {
  usd: {
    base: 'usd',
    rates: {
      'eur': 0.87,
    }
  },
  eur: {
    base: 'eur',
    rates: {
      usd: 1.15
    }
  }
};


describe('helpers currencyConversion', () => {

  it('can covert from eur to usd', async () => {
    const result = await convertCurrency('eur', 'usd', 100, exRates);
    assert.equal(result, 115);
  });

  it('can convert from usd to eur', async () => {
    const result = await convertCurrency('usd', 'eur', 100, exRates);
    assert.equal(result, 87);
  });

  it('returns the same value if base and target are the same', async () => {
    const result = await convertCurrency('eur', 'eur', 100, exRates);
    assert.equal(result, 100);
  });

});
