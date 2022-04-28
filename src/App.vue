<script lang="ts">
import Vue from "vue";

import VueCompositionAPI from "@vue/composition-api";
import UniCompositionAPI, { onLaunch } from "uni-composition-api";

Vue.use(VueCompositionAPI);
Vue.use(UniCompositionAPI);

export default Vue.extend({
  mpType: "app",
  setup() {
    onLaunch(() => {
      console.log("App Launch");
    });
  },
  onLaunch() {
    console.log("App Launch");
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  },
});
</script>

<style lang="scss"></style>
