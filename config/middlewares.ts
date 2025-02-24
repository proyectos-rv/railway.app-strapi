export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:3000', 'https://pablovazquezfront-production.up.railway.app/'],
      credentials: true,
    }
  },
  'global::force-secure',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
       'connect-src': ["'self'", 'https:'],
        'img-src': [
          "'self'",
          'data:',
          'blob:',
          'market-assets.strapi.io',
        ],
        'media-src': [
          "'self'",
          'data:',
          'blob:',
          'market-assets.strapi.io',
        ],
        upgradeInsecureRequests: null,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'accounts.google.com'],
          'frame-src': ["'self'", 'accounts.google.com'],
        },
      },
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
      },
    },
  },
  'strapi::session',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
]
