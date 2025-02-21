export default ({ env }) => ([
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true // Adding httpOnly for better security
      },
    },
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", "https:", "http:"],
          'img-src': ["'self'", "data:", "blob:", "https:", "http:"],
          'media-src': ["'self'", "data:", "blob:", "https:", "http:"],
          'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          upgradeInsecureRequests: null
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: {
        'Strict-Transport-Security': ['max-age=31536000; includeSubDomains'],
        'X-Content-Type-Options': ['nosniff'],
        'X-Frame-Options': ['DENY'],
      },
      origin: env.array('CORS_ORIGINS', [
        'https://pablovazquezfront-production.up.railway.app',
        'http://localhost:3000'
      ]),
      credentials: true,
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
]);
