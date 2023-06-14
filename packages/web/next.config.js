require('dotenv').config();
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@answersai-marketing/components',
  '@last-rev/component-library',
  '@answersai-marketing/graphql-sdk',
  '@answersai-marketing/utils',
  '@last-rev/contentful-app-components'
]);
const { withSentryConfig } = require('@sentry/nextjs');

// Allow bundle analysis via ANALYZE_BUNDLE env variable
const enableAnalyzer = !!(process.env.ANALYZE_BUNDLE && process.env.ANALYZE_BUNDLE.toLowerCase() === 'true');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: enableAnalyzer
});

const { getWinstonLogger } = require('@last-rev/logging');

const logger = getWinstonLogger({
  package: 'web',
  module: 'next.config'
});

// const ContentSecurityPolicy = `
// default-src 'self'  *.sentry.io  *.facebook.com *.ctfassets.net *.vercel-insights.com *.hsforms.com hubspot-forms-static-embed.s3.amazonaws.com www.google-analytics.com analytics.google.com rs.fullstory.com *.zoominfo.com *.dreamdata.cloud us-central1-adaptive-growth.cloudfunctions.net;
// style-src 'self' 'unsafe-inline'  *.sentry.io  *.googleapis.com *.fontawesome.com;
// script-src 'self' 'unsafe-inline' 'unsafe-eval' *.chilipiper.com *.youtube.com *.sentry.io  *.google-analytics.com *.googletagmanager.com *.gstatic.com *.googleadservices.com *.google.com *.facebook.net *.ads-twitter.com *.doubleclick.net *.jquery.com *.hsforms.net *.greenhouse.io *.clearbitscripts.com *.clickcease.com *.zoominfo.com *.hs-scripts.com *.dreamdata.cloud *.g2crowd.com *.redditstatic.com bat.bing.com *.fullstory.com cdn.pdst.fm amplify.outbrain.com cmp.osano.com *.adroll.com snap.licdn.com *.clickagy.com *.hs-analytics.net *.hscollectedforms.net *.hs-banner.com *.usemessages.com *.outbrain.com;
// font-src 'self'  *.sentry.io  fonts.gstatic.com *.fontawesome.com *.googleapis.com data:;
// frame-src 'self' *.hubspot.com *.chilipiper.com *.youtube.com *.google.com *.doubleclick.net *.greenhouse.io hemsync.clickagy.com forms.hsforms.com *.facebook.com www.facebook.com player.vimeo.com;
// worker-src 'self' data: blob:;
// connect-src 'self' *.chilipiper.com *.cloudfunctions.net *.us-central1-adaptive-growth.cloudfunctions.net *.osano.com *.doubleclick.net *.google-analytics.com *.hubspot.com *.oribi.io *.hsforms.com hubspot-forms-static-embed.s3.amazonaws.com *.gstatic.com *.googleadservices.com *.google.com *.facebook.net www.facebook.com *.ads-twitter.com *.jquery.com *.hsforms.net *.greenhouse.io *.clearbitscripts.com *.clickcease.com *.zoominfo.com *.hs-scripts.com *.dreamdata.cloud *.g2crowd.com *.redditstatic.com bat.bing.com *.fullstory.com cdn.pdst.fm amplify.outbrain.com cmp.osano.com *.adroll.com snap.licdn.com *.clickagy.com *.hs-analytics.net *.hscollectedforms.net *.hs-banner.com *.usemessages.com *.outbrain.com *.sentry.io *.vimeo.com vimeo.com;
// script-src-elem 'self' boards.greenhouse.io platform.twitter.com *.chilipiper.com *.youtube.com js.hs-banner.com googleads.g.doubleclick.net *.googleads.g.doubleclick.net *.adroll.com *.jquery.com *.hsforms.net *.clickcease.com tags.clickagy.com js.hscollectedforms.net js.usemessages.com js.hs-analytics.net www.clickcease.com *.zoominfo.com *.g2crowd.com *.dreamdata.cloud *.hs-scripts.com *.redditstatic.com *.bing.com *.googleadservices.com *.licdn.com *.google-analytics.com *.googletagmanager.com *.osano.com *.ads-twitter.com *.outbrain.com *.facebook.net *.clearbitscripts.com *.facebook.net *.pdst.fm *.fullstory.com *.clearbitjs.com js.hsleadflows.net 'unsafe-eval' 'unsafe-inline';
// img-src * data:;
// media-src * data:;
// object-src 'none';
// frame-ancestors 'self' https://app.contentful.com
// `;

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  // },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];

const hasAllSentryVars = !!(
  process.env.SENTRY_PROJECT &&
  process.env.SENTRY_AUTH_TOKEN &&
  process.env.SENTRY_URL &&
  process.env.SENTRY_ORG &&
  process.env.NEXT_PUBLIC_SENTRY_DSN
);

if (!hasAllSentryVars) {
  logger.warn('Sentry is disabled.  Please check your environment variables.');
}

const nextConfig = {
  ...(process.env.NODE_ENV === 'production' && {
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: '/:path*',
          headers: securityHeaders
        }
      ];
    }
  }),
  /**
   * @type {import('next').NextConfig}
   */
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  i18n: {
    // TODO: generate these and read from that
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  reactStrictMode: true,
  env: {
    CONTENTFUL_SETTINGS_ID: process.env.CONTENTFUL_SETTINGS_ID,
    GRAPHQL_SERVER_URL: process.env.GRAPHQL_SERVER_URL,
    CONTENTFUL_USE_PREVIEW: process.env.CONTENTFUL_USE_PREVIEW,
    SITE: process.env.SITE,
    SITE_SETTINGS: process.env.SITE_SETTINGS,
    DEFAULT_SITE_ID: process.env.DEFAULT_SITE_ID || process.env.SITE_ID,
    SITE_ID: process.env.DEFAULT_SITE_ID || process.env.SITE_ID,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_TOKEN: process.env.CONTENTFUL_DELIVERY_TOKEN,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
    CONTENTFUL_ENV: process.env.CONTENTFUL_ENV,
    DEPLOY_URL: process.env.DEPLOY_URL
  },
  productionBrowserSourceMaps: enableAnalyzer,
  images: {
    domains: ['images.ctfassets.net'],
    // Disabled as it's timing out on Netlify
    // formats: ['image/avif', 'image/webp']
    formats: ['image/webp']
  },
  sentry: {
    disableServerWebpackPlugin: !hasAllSentryVars,
    disableClientWebpackPlugin: !hasAllSentryVars,
    hideSourceMaps: true,
    widenClientFileUpload: true
  },
  webpack: (config, { webpack }) => {
    // Important: return the modified config
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': path.resolve(__dirname, '../../node_modules', 'react'),
      '@emotion/react': path.resolve(__dirname, '../../node_modules', '@emotion/react'),
      '@mui': path.resolve(__dirname, '../../node_modules/@mui'),
      '@answersai-marketing/graphql-sdk': path.resolve(
        __dirname,
        '../../node_modules/@answersai-marketing/graphql-sdk/src'
      ),
      '@answersai-marketing/utils': path.resolve(__dirname, '../../node_modules/@answersai-marketing/utils/src')
    };
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: false
      })
    );
    return config;
  }
};

module.exports = withPlugins([[withTM], withBundleAnalyzer, [withSentryConfig]], nextConfig);
