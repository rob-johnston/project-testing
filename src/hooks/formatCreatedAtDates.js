const { get } = require('lodash');

module.exports = (hook) => {
  if(get(hook, 'params.query.createdAt')) {
    Object.keys(hook.params.query.createdAt).forEach( key => {
      const dateString = hook.params.query.createdAt[key];
      hook.params.query.createdAt[key] = new Date(dateString);
    });
  }
  return hook;
};
