<template>
  <view class="content">
    <c-swiper :swiperItems="swiperItems"></c-swiper>
  </view>
</template>
<script lang="ts">
import CSwiper from "@/components/c-swiper/c-swiper.vue";
import { SwiperItems } from "@/components/types/c-swiper";
import { onLoad, onShow } from "uni-composition-api";
import { defineComponent } from "@vue/composition-api";
import toast from "@/components/utils/toast";

export default defineComponent({
  components: { CSwiper },
  setup() {
    onLoad(() => console.log("---onload---"));

    onShow(async () => {
      // toast
      await toast.toast("这是主页哦");
      await toast.confirm("这是一个弹窗", "确定?");
    });

    const swiperItems: SwiperItems = [
      {
        img: "https://z3.ax1x.com/2021/11/13/Iy3E9J.jpg",
        title: "欢迎关注云小洛公众号",
        subTitle: "更多好玩有趣的功能都在这里熬~",
        url: "https://mp.weixin.qq.com/s/7E8epgm4YFf2yZCsI5_ZPA",
      },
      {
        img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn11%2F440%2Fw744h496%2F20181030%2F97c2-hnaivxq7344712.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619914829&t=52a970d21d4898c8e7ca21b8b5aa9312",
        title: "鲤程新能源",
        subTitle: "心鲤程，心鲤想！",
        tip: "限时",
        url: "111",
      },
      {
        img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11780621658%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619914935&t=7d98cfe6b5a2634598fc7bda871aa7c9",
        title: "进口儿童座椅",
        subTitle: "123132",
        tip: "进口",
        url: "111",
      },
    ];

    return { swiperItems };
  },
});
</script>

<style>
page {
  background-color: #f3f4f6;
}
</style>

<style lang="scss"></style>
