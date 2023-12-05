import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksDefaultBlock extends Schema.Component {
  collectionName: 'components_blocks_default_blocks';
  info: {
    displayName: 'Default Block';
    icon: 'layer';
  };
  attributes: {
    default: Attribute.String;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    link: Attribute.Component<'components.link'>;
    icon: Attribute.String;
    iconOnly: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    href: Attribute.Text & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']>;
  };
}

export interface ComponentsLinksBox extends Schema.Component {
  collectionName: 'components_components_links_boxes';
  info: {
    displayName: 'Links Box';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'components.link', true> & Attribute.Required;
    title: Attribute.String;
  };
}

export interface FooterBlocksLinks extends Schema.Component {
  collectionName: 'components_footer_blocks_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    linksSections: Attribute.Component<'components.links-box', true>;
  };
}

export interface SettingsMaintenanceMode extends Schema.Component {
  collectionName: 'components_settings_maintenance_modes';
  info: {
    displayName: 'Maintenance mode';
    description: '';
  };
  attributes: {
    enabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    accessSecret: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'changeMe'>;
  };
}

export interface TextComponentsH1 extends Schema.Component {
  collectionName: 'components_text_components_h1s';
  info: {
    displayName: 'hTag';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    type: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 6;
      }> &
      Attribute.DefaultTo<1>;
  };
}

export interface TextComponentsParagraph extends Schema.Component {
  collectionName: 'components_text_components_paragraphs';
  info: {
    displayName: 'Paragraph';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
    justify: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface UtilityApiData extends Schema.Component {
  collectionName: 'components_utility_api_data';
  info: {
    displayName: 'apiData';
    description: '';
  };
  attributes: {
    path: Attribute.String & Attribute.Required;
    defaultResultsPerPage: Attribute.Integer &
      Attribute.SetMinMax<{
        max: 50;
      }> &
      Attribute.DefaultTo<10>;
  };
}

export interface UtilityOpenGraph extends Schema.Component {
  collectionName: 'components_utility_open_graphs';
  info: {
    displayName: 'Open Graph';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    siteName: Attribute.String;
    images: Attribute.Media;
    locale: Attribute.String;
    type: Attribute.String;
  };
}

export interface UtilitySeoMeta extends Schema.Component {
  collectionName: 'components_utility_seo_metas';
  info: {
    displayName: 'SEO-Meta';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
  };
}

export interface UtilitySeoRobots extends Schema.Component {
  collectionName: 'components_utility_seo_robots';
  info: {
    displayName: 'SEO Robots';
  };
  attributes: {
    index: Attribute.Boolean & Attribute.DefaultTo<true>;
    follow: Attribute.Boolean & Attribute.DefaultTo<true>;
    nocache: Attribute.Boolean;
  };
}

export interface UtilitySeo extends Schema.Component {
  collectionName: 'components_utility_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    meta: Attribute.Component<'utility.seo-meta', true>;
    structuredData: Attribute.JSON;
    opengraph: Attribute.Component<'utility.open-graph'>;
    robots: Attribute.Component<'utility.seo-robots'>;
    category: Attribute.String;
  };
}

export interface FormManagerFormField extends Schema.Component {
  collectionName: 'components_form_manager_form_fields';
  info: {
    displayName: 'Form Field';
    icon: 'file';
  };
  attributes: {
    key: Attribute.String & Attribute.Required;
    displayName: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<
      [
        'short_text',
        'long_text',
        'number',
        'date',
        'date_time',
        'time',
        'select'
      ]
    >;
  };
}

export interface FormManagerNotifyService extends Schema.Component {
  collectionName: 'components_form_manager_notify_services';
  info: {
    displayName: 'Notify Service';
    icon: 'file';
  };
  attributes: {
    key: Attribute.Enumeration<['email']> &
      Attribute.Required &
      Attribute.Unique;
    data: Attribute.JSON;
  };
}

export interface FormManagerVerificationService extends Schema.Component {
  collectionName: 'components_form_manager_verification_services';
  info: {
    displayName: 'Verification Honeypot';
    icon: 'file';
  };
  attributes: {
    key: Attribute.Enumeration<['honeypot']> &
      Attribute.Required &
      Attribute.Unique;
    data: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.default-block': BlocksDefaultBlock;
      'components.button': ComponentsButton;
      'components.link': ComponentsLink;
      'components.links-box': ComponentsLinksBox;
      'footer-blocks.links': FooterBlocksLinks;
      'settings.maintenance-mode': SettingsMaintenanceMode;
      'text-components.h1': TextComponentsH1;
      'text-components.paragraph': TextComponentsParagraph;
      'utility.api-data': UtilityApiData;
      'utility.open-graph': UtilityOpenGraph;
      'utility.seo-meta': UtilitySeoMeta;
      'utility.seo-robots': UtilitySeoRobots;
      'utility.seo': UtilitySeo;
      'form-manager.form-field': FormManagerFormField;
      'form-manager.notify-service': FormManagerNotifyService;
      'form-manager.verification-service': FormManagerVerificationService;
    }
  }
}
