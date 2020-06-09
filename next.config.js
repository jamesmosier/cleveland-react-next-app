const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack: (config, options) => {
    // customize your webpack config if you're feeling dangerous 🚨
    return config;
  },
});
