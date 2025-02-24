export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('URL', 'https://railwayapp-strapi-production-4f0e.up.railway.app'),
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Cookies seguras solo en producción
    sameSite: 'lax' // Política de sameSite para seguridad
  },
  server: {
    cors: {
      enabled: true,
      origin: env.array('CORS_ORIGINS', [
        'https://pablovazquezfront-production.up.railway.app',
        'http://localhost:3000'
      ]),
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },
});
