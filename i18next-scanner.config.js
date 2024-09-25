module.exports = {
  input: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"],
  options: {
    sort: true,
    debug: true,
    removeUnusedKeys: true,
    func: {
      list: ["i18next.t"],
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    lngs: ["en-US", "de-DE", "gr-GR", "al-AL"],
    defaultLng: "en-US",
    fallbackLng: "en-US",
    defaultValue: "",
    nsSeparator: ";",
    keySeparator: false,
    resource: {
      loadPath: "src/translations/{{lng}}.json",
      savePath: "src/translations/{{lng}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
  },
};
