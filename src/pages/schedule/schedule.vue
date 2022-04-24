<template>
  <view class="content">
    <c-schedule></c-schedule>
  </view>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CSchedule from "@/components/c-schedule/c-schedule.vue";

@Component({
  components: { CSchedule },
})
export default class SchedulePage extends Vue {}
</script>

<style>
page {
  background-color: #f3f4f6;
}
</style>
