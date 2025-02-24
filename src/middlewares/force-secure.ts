export default () => {
  return async (ctx, next) => {
    if (ctx.path === '/healthcheck' || ctx.path === '/health') {
      return next();
    }
    if (ctx.secure) {
      // La conexión ya es segura, continúa
      await next();
    } else {
      // Redirige a HTTPS
      ctx.status = 301;
      ctx.redirect(`https://${ctx.host}${ctx.url}`);
    }
  };
};