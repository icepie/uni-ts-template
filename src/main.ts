import Vue from "vue";
import App from "./App.vue";


import VueCompositionAPI from "@vue/composition-api";
import UniCompositionAPI from "uni-composition-api";
import VueI18n from 'vue-i18n'

Vue.use(VueCompositionAPI);
Vue.use(UniCompositionAPI);

Vue.use(VueI18n);

// 准备翻译的语言环境信息
const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    }
}

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
    locale: 'ja',
    messages
})

Vue.config.productionTip = false;


new App({ i18n }).$mount()