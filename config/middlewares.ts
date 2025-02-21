export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name:'strapi::session',
    config: {
      cookie: {
        secure: true, // Solo envía cookies sobre HTTPS
        httpOnly: true, // Evita acceso a cookies desde JavaScript
        sameSite: 'none', // Permite compartir cookies entre dominios
      },
    },
  },
  'strapi::favicon',
  'strapi::public',
];
