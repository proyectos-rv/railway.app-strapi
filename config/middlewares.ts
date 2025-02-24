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
        directives: {
          // ... otras directivas
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
