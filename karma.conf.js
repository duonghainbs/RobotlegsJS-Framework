process.env.TEST = true;
process.env.NODE_ENV = 'test';

const webpack = require("webpack")
const path = require("path")
const webpackConfig = require('./webpack.config.js')

delete webpackConfig.entry;

module.exports = function(config) {

  var configuration = {
    basePath: "",
    frameworks: ["mocha"],
    files: [
      "./test/entry.test.ts",
      "./test/**/**/**.test.ts",
      // "./test/robotlegs/bender/framework/impl/context.test.ts",
      // { pattern: "node_modules/reflect-metadata/Reflect.js", include: true },
      // { pattern: "node_modules/bluebird/js/browser/bluebird.js", include: true },
      {
        pattern: '**/*.map',
        served: true,
        included: false,
        watched: true,
      },
    ],
    preprocessors: {
      "./**/**/**/**.ts": ["sourcemap"],
      "./test/**/**/**.test.ts": ["webpack"]
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      "karma-webpack",
      "karma-sourcemap-writer",
      "karma-sourcemap-loader",
      "karma-remap-istanbul",
      "karma-mocha",
      "karma-chai",
      "karma-sinon",
      "karma-coverage",
    ],
    reporters: (config.singleRun
      ? ["dots", "coverage"]
      : ["dots"]),
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome']
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['PhantomJS'];
    configuration.plugins.push("karma-phantomjs-launcher");

  } else {
    configuration.plugins.push("karma-chrome-launcher");
    configuration.browsers = ['Chrome'];
  }

  config.set(configuration);
};
