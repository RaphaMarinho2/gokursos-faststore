module.exports = {
  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'storeframework',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
  },

  // Default channel
  channel: '{"salesChannel":"1"}',

  // Session variables
  locale: 'pt-BR',
  currency: {
    code: 'BRL',
    symbol: 'R$',
  },

  // Production URLs
  storeUrl: 'https://vtexfaststore.com',
  secureSubdomain: 'https://secure.vtexfaststore.com',
  checkoutUrl: 'https://secure.vtexfaststore.com/checkout',
  loginUrl: 'https://secure.vtexfaststore.com/api/io/login',
  accountUrl: 'https://secure.vtexfaststore.com/api/io/account',

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:9000',
    pages: {
      home: '/',
      pdp: '/administracao-de-marketing/p',
      collection: '/tecnologia',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/apple-magic-mouse-99988212/p',
      collection: '/office',
      collection_filtered:
        '/office/?category-1=office&marca=acer&facets=category-1%2Cmarca',
      search: '/s?q=orange',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-PGHZ95N',
    tagId: 'G-ZJR48Y5MNP',
  },
}
