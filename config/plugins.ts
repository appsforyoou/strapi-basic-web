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
          strapiServiceUUID: 'plugin::strapi-form-manager.validation.honeypot',
        }
      },
      notifyServices: {
        email: {
          strapiServiceUUID: 'plugin::strapi-form-manager.notification.email',
        }
      }
    }
  }
}
