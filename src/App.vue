<script lang="ts">
import Vue from "vue";

import { onLaunch } from "uni-composition-api";

export default Vue.extend({
  mpType: "app",
  setup() {
    onLaunch(() => {
      console.log("App Launch");
      // #ifdef H5
      uni.getSystemInfo({
        success(res) {
          const isMobile: boolean = /iOS|Android/i.test(res.system);
          if (!isMobile) {
            const basic: string = "/static/pc.html";
            if (res.windowWidth > 768 && !/PC/i.test(location.href)) {
              window.location.replace(basic + window.location.hash);
            }
            // 监听窗口大小变化
            window.addEventListener("resize", () => {
              if (window.innerWidth > 768) {
                window.location.replace(basic + window.location.hash);
              }
            });
          }
        },
      });
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
