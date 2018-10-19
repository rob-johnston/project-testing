const getExchangeRates = require('./getExchangeRates');

module.exports = async (base, target, amount, customRates = {} ) => {
  if (base === target)
    return amount;

  const exRates = customRates[base] || getExchangeRates(base);

  return (amount * exRates.rates[target]).toFixed(0);
};
