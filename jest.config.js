module.exports = {
  preset: "react-native",
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: [
    "node_modules/(?!victory|react-native-svg|react-native|@react-native-community|@react-navigation)/",
  ],
};
