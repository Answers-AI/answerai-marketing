/** @type {import('next').NextConfig} */

module.exports = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ['images.ctfassets.net'],
    formats: ['image/avif', 'image/webp']
  },
  productionBrowserSourceMaps: true,
  typescript: {
    ignoreBuildErrors: true
  },
  transpilePackages: ['ui', 'graphql-sdk', '@mui/material', '@mui/system', '@mui/icons-material'],
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}'
    }
  },
  env: {
    CONTENTFUL_SETTINGS_ID: process.env.CONTENTFUL_SETTINGS_ID,
    GRAPHQL_SERVER_URL: process.env.GRAPHQL_SERVER_URL,
    CONTENTFUL_USE_PREVIEW: process.env.CONTENTFUL_USE_PREVIEW,
    SITE: process.env.SITE,
    SITE_SETTINGS: process.env.SITE_SETTINGS,
    DEFAULT_SITE_ID: process.env.DEFAULT_SITE_ID,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_TOKEN: process.env.CONTENTFUL_DELIVERY_TOKEN,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
    CONTENTFUL_ENV: process.env.CONTENTFUL_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
    DEPLOY_URL: process.env.DEPLOY_URL
  },
};
