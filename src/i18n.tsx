// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../public/locales/en.json';
import ruTranslation from '../public/locales/ru.json';
import uzTranslation from '../public/locales/uz.json';
// Tarjima fayllarini sozlash
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      uz: {
        translation: uzTranslation,
      },
    },
    lng: 'en', // boshlang'ich til
    fallbackLng: 'en', // agar tarjima topilmasa
    interpolation: {
      escapeValue: false, // React da XSS himoyasi mavjud
    },
  });

export default i18n;
