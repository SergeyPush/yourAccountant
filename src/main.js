import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueI18n from "vue-i18n";
import VueMask from "v-mask";
import VueScrollReveal from "vue-scroll-reveal";

import { i18n } from "./components/plugins/i18n";
import "./registerServiceWorker";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Success from "./components/utils/Success.vue";

Vue.use(VueMask);
Vue.use(VueI18n);
Vue.use(VueScrollReveal);
Vue.component("app-success", Success);

Vue.config.productionTip = false;
Vue.use(VueScrollReveal);

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
