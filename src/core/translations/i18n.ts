import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../assets/locales/en/translation.json";
import translationPL from "../../assets/locales/pl/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pl: {
    translation: translationPL,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
