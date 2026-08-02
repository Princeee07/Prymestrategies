import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';

export const siteConfig = {
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  ogImage: `${SITE_URL}/og.png`,
  links: {
    facebook: 'https://facebook.com/prymestrategies',
    instagram: 'https://instagram.com/prymestrategies',
    linkedin: 'https://linkedin.com/company/prymestrategies',
  },
  creator: 'PrymeStrategies',
};

export type SiteConfig = typeof siteConfig;
