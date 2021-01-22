const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    [withPWA, { pwa: { disable: false, dest: "public", runtimeCaching } }],
  ],
  {
    webpack: (config, { dev, isServer }) => {
      // if (isServer) {
      //   require("./scripts/generate-sitemap");
      // }

      // Replace React with Preact only in client production build
      if (!dev && !isServer && process.env.PREACT === "true") {
        Object.assign(config.resolve.alias, {
          react: "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat",
        });
      }

      return config;
    },
    i18n: {
      locales: ["en-US"],
      defaultLocale: "en-US",
    },
    // i18n: { locales: ["en", "ru", "es", "zh"], defaultLocale: "en" },
    // images: {
    //   domains: [
    //     "i.scdn.co", // Spotify Album Art
    //     "pbs.twimg.com", // Twitter Profile Picture
    //   ],
    // },
  }
);
