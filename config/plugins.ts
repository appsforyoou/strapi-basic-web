export default {
  'strapi-plugin-populate-deep': {
    enabled: true,
  },
  'strapi-form-manager': {
    enabled: true,
    resolve: './src/plugins/strapi-form-manager',
    config: {
      verificationServices: {
        honeypot: {
          strapiServiceUUID: 'plugin::strapi-form-manager.verification-service.honeypot',
        }
      },
      notifyServices: {
        email: {
          strapiServiceUUID: 'plugin::strapi-form-manager.notify-service.email',
        }
      }
    }
  }
}
