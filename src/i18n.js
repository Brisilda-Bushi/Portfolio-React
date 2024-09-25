import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import en_translations from "./translations/en.json";
import de_translations from "./translations/de.json";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

// import translationEN from "./translations/en-US.json";
// import translationDE from "./translations/de-DE.json";

const resources = {
    en: {
        translation: en_translations,
    },
    de: {
        translation: de_translations,
    },
};

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    //.use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    //.use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources,
        returnEmptyString: false,
        fallbackLng: "en",
        lngs: ["en", "de", "gr", "al"],
        debug: true,
        lng: "en",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend: {
            loadPath: "src/translations/{{lng}}.json", // Path to translation files
        },
    });

export default i18n;
