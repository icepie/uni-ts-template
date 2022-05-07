import { PropType } from "@vue/composition-api";
import { SwiperItems } from "../types/c-swiper";

export const props = {
    previousMargin: { type: String, default: "0" },
    nextMargin: { type: String, default: "0" },
    height: { type: Number, default: 320 },
    swiperItems: { type: Array as PropType<SwiperItems>, required: true },
    margin: { type: Number, default: 10 },
    borderRadius: { type: Number, default: 20 },
    titleFontSize: { type: Number, default: 36 },
    titleColor: { type: String, default: "#ffffff" },
    subTitleFontSize: { type: Number, default: 24 },
    subTitleColor: { type: String, default: "#ffffff" },
    dotHeight: { type: Number, default: 0 },
    dotMargin: { type: Number, default: 0 },
    SelectBG: { type: String, default: "rgba(255, 255, 255, 0.5)" },
    UncheckedBG: { type: String, default: "rgba(255, 255, 255, 1)" },
    DotPosition: { type: Number, default: 1 },
    button: { type: Boolean, default: true },
}