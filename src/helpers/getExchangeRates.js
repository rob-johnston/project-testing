
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


module.exports = (base) => {
  if (base === 'usd') {
    return usdBaseResponse;
  }
  // default to eur
  return eurBaseResponse;
};
