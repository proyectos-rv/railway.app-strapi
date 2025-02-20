import { Strategy as GoogleStrategy } from "passport-google-oauth2";

export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    providers: [
      {
        uid: "google",
        displayName: "Google",
        icon: "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png",
        createStrategy: (strapi) =>
          new GoogleStrategy(
            {
              clientID: env("GOOGLE_CLIENT_ID"),
              clientSecret: env("GOOGLE_CLIENT_SECRET"),
              scope: [
                "https://www.googleapis.com/auth/userinfo.email",
                "https://www.googleapis.com/auth/userinfo.profile",
              ],
              callbackURL:
                strapi.admin.services.passport.getStrategyCallbackURL("google"),
            },
            (_request, _accessToken, _refreshToken, profile, done) => {
              console.log('GOOGLE PROFILE::>>>',profile)
              done(null, {
                email: profile.email,
                firstname: profile.given_name,
                lastname: profile.family_name,
                avatar: profile.picture,
                username: profile.email.split('@')[0]
              }, (err) => {
                if (err) {
                  console.error('Error en el callback de autenticación:', err);
                }
              });
            }
          ),
      },
    ],
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
