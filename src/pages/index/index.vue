<template>
  <view class="content">
    <c-swiper :swiperItems="swiperItems" title="123123123"></c-swiper>
    <c-card title="主页">
      <navigator url="/pages/time-table/time-table" open-type="navigate">
        <em class="c-iconfont icon-time-table"></em>
        <view>课表</view>
      </navigator>
      <navigator url="/pages/calendar/calendar" open-type="navigate">
        <em class="c-iconfont icon-calendar"></em>
        <view>校历</view>
      </navigator>
    </c-card>
    <!-- <navigator url="/pages/tour/tour" open-type="navigate">
      <i class="c-iconfont icon-nav"></i>
      <view>校园导览</view>
    </navigator> -->
  </view>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CSwiper from "@/components/c-swiper/c-swiper.vue";
import CCard from "@/components/c-card/c-card.vue";

@Component({
  components: { CSwiper, CCard },
})
export default class App extends Vue {
  swiperItems: Array<any> = [
    {
      img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn11%2F440%2Fw744h496%2F20181030%2F97c2-hnaivxq7344712.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619914829&t=52a970d21d4898c8e7ca21b8b5aa9312",
      title: "鲤程新能源",
      Subtitle: "心鲤程，心鲤想！",
      tip: "限时",
      url: "111",
    },
    {
      img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs1.xchuxing.com%2Fxchuxing%2Fforum%2F201607%2F27%2F185524zj7wog6qizk9o90k.jpg&refer=http%3A%2F%2Fs1.xchuxing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619914861&t=4c64a4a5cec709f9d03507b793546646",
      title: "包月低至9.9元",
      Subtitle: "立享受充电礼包！",
      tip: "推荐",
      url: "111",
    },
    {
      img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11780621658%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619914935&t=7d98cfe6b5a2634598fc7bda871aa7c9",
      title: "进口儿童座椅",
      Subtitle: "￥698.99",
      tip: "进口",
      url: "111",
    },
    {
      img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstc.zjol.com.cn%2Fg1%2FM000E11CggSDVi-zTuAT1Y3AAB2NSzPgKI097.jpg%3Fwidth%3D576%26height%3D340&refer=http%3A%2F%2Fstc.zjol.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619914972&t=9cc0a578d4818d87c43f1fe839010096",
      title: "品牌T恤",
      Subtitle: "￥22.99",
      tip: "nike",
      url: "111",
    },
  ];
}
</script>
