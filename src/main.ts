import Vue from "vue";
import App from "./App.vue";

import VueCompositionAPI from "@vue/composition-api";
import UniCompositionAPI from "uni-composition-api";

Vue.use(VueCompositionAPI);
Vue.use(UniCompositionAPI);

Vue.config.productionTip = false;

new App().$mount();
