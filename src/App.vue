<script lang="ts">
import Vue from "vue";

import { onLaunch } from "uni-composition-api";

export default Vue.extend({
  mpType: "app",
  setup() {
    onLaunch(() => {
      console.log("App Launch");
    });
  },
});
</script>

<style lang="scss"></style>
