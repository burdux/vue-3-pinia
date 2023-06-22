<template>
  <MainComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainComponent from './components/MainComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainComponent
  }
});
</script>

<style lang="scss">
body, html {
  height: 100%;
  margin: 0;
  padding: 0;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
}
</style>
