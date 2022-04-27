<template>
  <view class="content-top">
    <swiper
      @change="swiperChange"
      :style="{ height: height + 'rpx' }"
      circular="true"
      autoplay="true"
      interval="8000"
      :previous-margin="previousMargin"
      :next-margin="nextMargin"
    >
      <swiper-item v-for="(item, index) in swiperItems" :key="index">
        <view
          class="content"
          :style="{
            height: height + 'rpx',
            marginLeft: margin + 'rpx',
            marginRight: margin + 'rpx',
            borderRadius: borderRadius + 'rpx',
          }"
        >
          <image :src="item.img" mode="aspectFill" class="swiper-img"></image>
          <view class="mask"></view>
          <view class="written">
            <text
              v-if="item.title"
              class="Text-initialization overflow"
              :style="{ fontSize: titleFontSize + 'rpx', color: titleColor }"
              :class="[index === enjoySwiper ? 'title' : '']"
            >
              {{ item.title }}
            </text>
            <text
              v-if="item.subTitle"
              class="Text-initialization overflow"
              :style="{
                fontSize: subTitleFontSize + 'rpx',
                color: subTitleColor,
              }"
              :class="[index === enjoySwiper ? 'subTitle' : '']"
            >
              {{ item.subTitle }}
            </text>
            <view
              class="Text-initialization"
              v-if="button"
              @click="onButClick"
              :class="[index === enjoySwiper ? 'bt' : '']"
              ><text class="bt-ico">查看详情 ➜</text></view
            >
          </view>
        </view>
      </swiper-item>
    </swiper>
    <view v-if="DotPosition === 1">
      <view
        class="dot"
        :style="{
          top: height - 30 - dotHeight + 'rpx',
          left: margin + 30 + dotMargin + 'rpx',
        }"
      >
        <view
          v-for="(_, index) in swiperItems"
          :key="index"
          :style="{ backgroundColor: SelectBG }"
          :class="[index === enjoySwiper ? 'Select ' : 'Unchecked']"
        ></view>
      </view>
      <view
        class="dot"
        :style="{
          top: height - 30 - dotHeight + 'rpx',
          left: margin + 30 + dotMargin + 'rpx',
        }"
      >
        <view
          v-for="(_, index) in swiperItems"
          :key="index"
          :style="{ backgroundColor: UncheckedBG }"
          :class="[index === enjoySwiper ? 'Select1 ' : 'Unchecked1']"
        ></view>
      </view>
    </view>
    <view v-if="DotPosition === 2">
      <view
        class="dot"
        :style="{
          top: height - 30 - dotHeight + 'rpx',
          right: margin + 30 + dotMargin + 'rpx',
        }"
      >
        <view
          v-for="(_, index) in swiperItems"
          :key="index"
          :style="{ backgroundColor: SelectBG }"
          :class="[index === enjoySwiper ? 'Select ' : 'Unchecked']"
        ></view>
      </view>
      <view
        class="dot"
        :style="{
          top: height - 30 - dotHeight + 'rpx',
          right: margin + 30 + dotMargin + 'rpx',
        }"
      >
        <view
          v-for="(_, index) in swiperItems"
          :key="index"
          :style="{ backgroundColor: UncheckedBG }"
          :class="[index === enjoySwiper ? 'Select1 ' : 'Unchecked1']"
        ></view>
      </view>
    </view>
    <view v-if="DotPosition === 3">
      <view class="dot-c" :style="{ top: height - 30 - dotHeight + 'rpx' }">
        <view
          v-for="(_, index) in swiperItems"
          :key="index"
          :style="{ backgroundColor: SelectBG }"
          :class="[index === enjoySwiper ? 'Select ' : 'Unchecked']"
        ></view>
      </view>
      <view class="dot-c" :style="{ top: height - 30 - dotHeight + 'rpx' }">
        <view
          v-for="(_, index) in swiperItems"
          :key="index"
          :style="{ backgroundColor: UncheckedBG }"
          :class="[index === enjoySwiper ? 'Select1 ' : 'Unchecked1']"
        ></view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
import { SwiperItems } from "../types/c-swiper";

@Component
export default class CSwiper extends Vue {
  // swiperItems  循环对象
  // height  高度
  // margin  边距
  // borderRadius 圆角
  // titleFontSize 标题大小
  // titleColor 标题颜色
  // subTitleFontSize 副标题大小
  // subTitleColor 副标题颜色
  // dotHeight 指示点距离轮播底部高度
  // dotMargin 指示点侧边距
  // SelectBG 指示点未选中颜色
  // UncheckedBG 指示点选中颜色
  // DotPosition 指示点位置 1左侧 2右侧 3居中
  // button 查看详情按钮是否显示 1显示 0不显示
  // previousMargin 前边距，可用于露出前一项的一小部分
  // nextMargin 后边距，可用于露出后一项的一小部分
  // enjoySwiper 当前激活项

  @Prop({ type: String, default: "0" })
  previousMargin!: string;
  @Prop({ type: String, default: "0" })
  nextMargin!: string;
  @Prop({ type: Number, default: 320 })
  height!: number;
  // swiperItems
  @Prop({ type: Array, required: true })
  swiperItems!: SwiperItems;
  @Prop({ type: Number, default: 10 })
  margin!: number;
  @Prop({ type: Number, default: 20 })
  borderRadius!: number;
  @Prop({ type: Number, default: 36 })
  titleFontSize!: number;
  @Prop({ type: String, default: "#ffffff" })
  titleColor!: string;
  @Prop({ type: Number, default: 24 })
  subTitleFontSize!: number;
  @Prop({ type: String, default: "#ffffff" })
  subTitleColor!: string;
  @Prop({ type: Number, default: 0 })
  dotHeight!: number;
  @Prop({ type: Number, default: 0 })
  dotMargin!: number;
  @Prop({ type: String, default: "rgba(255, 255, 255, 0.5)" })
  SelectBG!: string;
  @Prop({ type: String, default: "rgba(255, 255, 255, 1)" })
  UncheckedBG!: string;
  @Prop({ type: Number, default: 1 })
  DotPosition!: number;
  @Prop({ type: Boolean, default: true })
  button!: boolean;

  // 当前的激活项
  public enjoySwiper: number = 0;

  onButClick(): void {
    this.$emit("onButClick", this.enjoySwiper);
  }

  swiperChange(e: CustomEvent): void {
    this.enjoySwiper = e.detail.current;
  }
}
</script>

<style scoped>
.content-top {
  /* margin-top: 30rpx; */
  position: relative;
  margin-bottom: 30rpx;
}
.content {
  overflow: hidden !important;
  position: relative;
}
.mask {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0rpx;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(67, 72, 92, 0) 100%
  );
  z-index: 1;
}
.swiper-img {
  width: 100%;
  object-fit: cover;
}
.written {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 25%;
  left: 30rpx;
  z-index: 2;
}
.Text-initialization {
  opacity: 0;
}
.title {
  font-weight: bold;
  width: 60%;
  animation: textAnimation 0.8s 0.3s forwards;
}
.subTitle {
  width: 70%;
  animation: textAnimation 0.8s 0.5s forwards;
}
.overflow {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bt {
  margin-top: 20rpx;
  animation: textAnimation 0.8s 0.7s forwards;
}
.bt-ico {
  color: #ffffff;
  border: #ffffff solid 1px;
  border-radius: 10rpx;
  font-size: 24rpx;
  padding: 4rpx 10rpx;
  background-color: rgb(0, 0, 0, 0.3);
}
@keyframes textAnimation {
  0% {
    opacity: 0;
    transform: translateX(-80rpx);
  }
  100% {
    opacity: 1;
  }
}
.dot {
  position: absolute;
  display: flex;
}
.Select {
  height: 6rpx;
  width: 10rpx;
  border-radius: 10rpx;
  margin-left: 10rpx;
  animation: Select 1s 0s 1 forwards;
}
.Unchecked {
  height: 6rpx;
  width: 10rpx;
  margin-left: 10rpx;
  border-radius: 10rpx;
}
@keyframes Select {
  to {
    height: 6rpx;
    width: 60rpx;
  }
}
.Select1 {
  height: 6rpx;
  width: 10rpx;
  border-radius: 10rpx;
  margin-left: 10rpx;
  animation: Select1 7s 0s 1 forwards;
  background-color: rgba(255, 255, 255, 1);
}
.Unchecked1 {
  height: 6rpx;
  width: 10rpx;
  margin-left: 10rpx;
  border-radius: 10rpx;
  background-color: rgba(255, 255, 255, 0) !important;
}
@keyframes Select1 {
  from {
    height: 6rpx;
    width: 10rpx;
  }
  to {
    height: 6rpx;
    width: 60rpx;
  }
}
.dot-c {
  position: absolute;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
}
</style>
