module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      // [
      //   "module-resolver",
      //   {
      //     cwd: "babelrc",
      //     extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
      //     alias: {
      //       "@components": "./src/components",
      //       "@hooks": "./src/hooks",
      //       "@screens": "./src/screens",
      //       "@types": "./src/types",
      //     },
      //   },
      // ],
    ],
  };
};
