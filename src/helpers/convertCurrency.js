
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

const getExchageRates = (base) => {
  if (base === 'usd') {
    return usdBaseResponse;
  }
  // default to eur
  return eurBaseResponse;
}

module.exports = async (base, target, amount) => {
  if (base === target)
    return amount;

  const exRates = getExchageRates(base);

  return amount * exRates.rates[target];
}
