<script lang="ts">
import Vue from "vue";
import { FitH5Page } from "@/utils/h5";
import { onLaunch } from "uni-composition-api";

export default Vue.extend({
  mpType: "app",
  setup() {
    onLaunch(async () => {
      console.log("App Launch");
      // #ifdef H5
      const [err, systemInfo] = await uni.getSystemInfo({});
      if (err) {
        console.log("GetSystemInfo error: ", err);
      } else {
        // H5自适应屏幕宽度 (iframe方案)
        await FitH5Page(systemInfo);
      }
      // #endif
    });
  },
});
</script>

<style lang="scss">
// #ifdef H5
body::-webkit-scrollbar,
html::-webkit-scrollbar {
  display: none;
}
// #endif
</style>
