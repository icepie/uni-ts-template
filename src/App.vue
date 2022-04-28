<script lang="ts">
import Vue from "vue";

import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

export default Vue.extend({
  mpType: "app",
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
