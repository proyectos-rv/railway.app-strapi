export default () => {
  return async (ctx, next) => {
    if (ctx.path === '/healthcheck' || ctx.path === '/health') {
      return next();
    }

    ctx.request.secure = true;
    await next();
  };
};