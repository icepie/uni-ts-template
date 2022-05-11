<template>
  <div>
    <div class="c-hello">hello {{ name }}</div>
    <button @click="add">日/月</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const name = ref("world");
    const add = () => {
      name.value = name.value + "1";
    };

    return {
      name,
      add,
    };
  },
});
</script>

<style scss scoped></style>
