<template>
  <div id="app">
    <dc-header></dc-header>
    <router-view />
  </div>
</template>

<style lang="scss">
</style>
<script>

import DcHeader from '@/components/header.vue';
export default {
  components: {
    DcHeader,
  },
  computed: {
  },
  methods: {

  }
}
</script>
