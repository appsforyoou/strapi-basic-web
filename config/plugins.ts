export default ({ env }) => ({
  'strapi-plugin-populate-deep': {
    enabled: true,
  },
  'strapi-form-manager': {
    enabled: true,
    resolve: './src/plugins/strapi-form-manager',
    config: {
      verificationServices: {
        honeypot: {
          strapiServiceUUID: 'plugin::strapi-form-manager.validation.honeypot',
        }
      },
      notifyServices: {
        email: {
          strapiServiceUUID: 'plugin::strapi-form-manager.notification.email',
        }
      },
    }
  },
  'email': {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
        secure: env('SMTP_SECURE'),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        }
      },
      settings: {
        defaultFrom: env('SMTP_FROM'),
        defaultReplyTo: env('SMTP_REPLYTO'),
      }
    }
  }
})
