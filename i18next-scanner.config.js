module.exports = {
    input: ["src/**/*.js", "src/**/*.jsx"],
    options: {
        sort: true,
        debug: true,
        removeUnusedKeys: true,
        func: {
            list: ["t"],
            extensions: [".js", ".jsx"],
        },
        lngs: ["en", "de", "gr", "al"],
        defaultLng: "en",
        fallbackLng: "en",
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
