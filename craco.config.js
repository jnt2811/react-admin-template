const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    presets: [["@babel/preset-react", { runtime: "automatic", importSource: "@emotion/react" }]],
    plugins: ["@emotion/babel-plugin"],
  },
};
