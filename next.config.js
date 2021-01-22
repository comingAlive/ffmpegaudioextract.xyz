const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
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
});
