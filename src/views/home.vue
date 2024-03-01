<template>
  <div class="home">
    <dc-header></dc-header>
    <div class="container">
      <dc-menu></dc-menu>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
<script>
import DcHeader from './home/header.vue';
import DcMenu from './home/menu.vue';
export default {
  components: {
    DcHeader,
    DcMenu
  },
  methods: {

  }
}
</script>
