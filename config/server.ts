export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('URL'),
  proxy: true,
  server: {
    cors: {
      enabled: true,
      origin: env('CORS_ORIGIN', 'https://pablovazquezfront-production.up.railway.app'), // Configura el origen CORS
    },
  },
});
