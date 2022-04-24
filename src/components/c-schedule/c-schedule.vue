<template>
  <view class="timetable-main text-gray" :style="[bgImageStyle]">
    <view
      class="timetable-fixed"
      :style="[bgImageStyle, { 'padding-top': customBar + 'px' }]"
    >
      <!-- 周数切换 -->
      <view class="timetable-week" v-if="showTimetableWeek">
        <!-- <scroll-view
          class="week-nav"
          scroll-x
          scroll-with-animation
          :scroll-left="scrollLeft"
        >
          <view
            class="week-item"
            v-for="(weekTimetable, weekIndex) in timetableList"
            :key="weekIndex"
          >
            <view
              class="item-main"
              :class="
                originalWeekIndex === weekIndex
                  ? 'original'
                  : currentWeekIndex === weekIndex
                  ? 'current'
                  : ''
              "
              @click="$store.commit('timetable/setCurrentWeekIndex', weekIndex)"
            >
              <view class="main-week"> 第 {{ weekIndex + 1 }} 周 </view>
              <view class="main-body">
                <block
                  v-for="(dayTimetable, dayIndex) in weekTimetable"
                  :key="dayIndex"
                >
                  <view v-if="dayIndex < 5" class="body-item">
                    <block
                      v-for="(timeTimetable, timeIndex) in dayTimetable"
                      :key="timeIndex"
                    >
                      <view
                        class="item-dot"
                        :class="timeTimetable != null ? 'true' : 'false'"
                      ></view>
                    </block>
                  </view>
                </block>
              </view>
            </view>
          </view>
        </scroll-view> -->
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";

@Component
export default class CSchedule extends Vue {
  @Prop({ type: Boolean, default: true })
  showTimetableWeek!: boolean;

  @Prop({ type: Number, default: 120 })
  customBar!: number;

  // 课程背景图片
  public bgImage!: string;

  // 课程背景样式
  get bgImageStyle(): object {
    const style = {
      "background-color": "#FFFFFF",
    };

    this.bgImage =
      "https://static.fotor.com.cn/assets/projects/pages/4ab301e0-1eda-11e9-9d4b-73e837731753_221240ee-44f2-4da8-becd-862d3c24847d_thumb.jpg";

    if (this.bgImage) {
      Object.assign(style, {
        color: "#FFFFFF",
        "background-image": `url(${this.bgImage})`,
      });
    }
    return style;
  }
}
</script>

<style lang="scss" scoped>
.text-gray {
  color: #666666;
}

.timetable-main {
  background-size: cover;
  background-position: top center;
  .timetable-fixed {
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 0;
    background-size: cover;
    background-position: top center;
  }
}

.timetable-week {
  background-color: #f3f4f6;
  color: #666666;
  height: 140rpx;
  display: flex;
  align-items: center;
  .week-nav {
    white-space: nowrap;
    .week-item {
      width: 132rpx;
      height: 120rpx;
      display: inline-block;
      .item-main {
        width: 96rpx;
        border-radius: 10rpx;
        margin: 0 auto;
        padding: 8rpx 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        &.original {
          background-color: #f3f4f6;
        }
        &.current {
          background-color: #f3f4f6;
        }
        .main-week {
          font-size: 20rpx;
          text-align: center;
          margin-bottom: 8rpx;
        }
        .main-body {
          width: 70rpx;
          height: 70rpx;
          display: flex;
          justify-content: space-evenly;
          .body-item {
            width: 10rpx;
            height: 70rpx;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            .item-dot {
              width: 10rpx;
              height: 10rpx;
              border-radius: 50%;
              &.true {
                background-color: #3fd0a9;
              }
              &.false {
                background-color: #dcdcdc;
              }
            }
          }
        }
      }
    }
  }
}
</style>
