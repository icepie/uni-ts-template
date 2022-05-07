import Vue from "vue";
import App from "./App.vue";

import VueCompositionAPI from "@vue/composition-api";
import UniCompositionAPI from "uni-composition-api";

// 国际化
import i18n from "./i18n";

Vue.use(VueCompositionAPI);
Vue.use(UniCompositionAPI);

Vue.config.productionTip = false;

new App({ i18n }).$mount()