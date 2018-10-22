module.exports = function (type) {
  return async context => {
    const logPayload = context.result;
    // move id of resource to a different field
    logPayload.resourceId = logPayload._id;
    delete logPayload._id;
    // actually create the log
    await context.app.service('service-logs')
      .create({ ...logPayload, type });
    return context;
  };
};
