<template>
  <div class="main">
    <div class="box-1">
      <InputsComponent/>
    </div>
    <div class="box-2">
      <ProfitComponent/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InputsComponent from "@/components/InputsComponent.vue";
import ProfitComponent from "@/components/ProfitComponent.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;

  .box-1 {
    width: 500px;
    height: 250px;
    background-color: white;
    border-radius: 20px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box-2 {
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
