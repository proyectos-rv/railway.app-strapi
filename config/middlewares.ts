export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
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
