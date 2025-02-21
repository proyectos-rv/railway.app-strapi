export default ({ env }) => ([
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 24 * 60 * 60 * 1000
      },
    },
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::headers',
    config: {
      headers: {
        'Strict-Transport-Security': ['max-age=31536000; includeSubDomains'],
        'X-Content-Type-Options': ['nosniff'],
        'X-Frame-Options': ['DENY'],
      }
    }
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
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