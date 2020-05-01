import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import VueI18n from "vue-i18n";
import { i18n } from "./components/plugins/i18n";

Vue.use(VueI18n);

Vue.config.productionTip = false;

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
