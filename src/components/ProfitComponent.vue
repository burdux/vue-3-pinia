<template>
  <div class="row">
    <div>Profit</div>
    <div>{{ profit }}%</div>
  </div>
</template>

<script lang="ts" setup>
import {userDataStore} from "@/store";
import {computed} from "vue";

const profit = computed(() => {
  return userDataStore().profit
})
</script>


<style lang="scss" scoped>
.row {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>