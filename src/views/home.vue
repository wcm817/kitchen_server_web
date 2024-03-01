<template>
  <div class="home">
    <dc-menu></dc-menu>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import DcMenu from './home/menu.vue';
export default {
  components: {
    DcMenu
  },
  methods: {

  }
}
</script>

<style lang="scss">
.home {
  height: calc(100vh - 50px);
  display: flex;
  .container {
    flex: 1;
    padding: 20px;
  }
}
</style>
