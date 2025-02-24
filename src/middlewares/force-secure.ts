export default () => {
  return async (ctx, next) => {
    if (ctx.path === '/healthcheck' || ctx.path === '/health') {
      return next();
    }

    Object.defineProperty(ctx.request, 'protocol', {
      value: 'https',
      configurable: true,
    });

    await next();
  };
};