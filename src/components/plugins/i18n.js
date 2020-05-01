import Vue from "vue";
import VueI18n from "vue-i18n";
import localeRus from "./localeRus.json";
import localeUkr from "./localeUkr.json";
Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "ukr",
  fallbackLocale: "rus",
  messages: {
    ukr: {
      ...localeUkr,
    },
    rus: {
      ...localeRus,
    },
  },
});
