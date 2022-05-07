import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";
import zh_CN from "@/locale/zh-CN.json";
import en_US from "@/locale/en-US.json";

Vue.use(VueI18n);

const messages: LocaleMessages = {
    en: en_US,
    cn: zh_CN
};

const i18n = new VueI18n({
    locale: "en",
    messages,
});

export default i18n;