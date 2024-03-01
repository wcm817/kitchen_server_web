<template>
  <div class="menu">
    <el-menu default-active="1">
      <el-menu-item index="1" @click="$router.push({ path: '/home/comment' })">
        <i class="el-icon-menu"></i>
        <span slot="title">留言表</span>
      </el-menu-item>
      <el-menu-item
        index="2"
        @click="$router.push({ path: '/home/carouselData' })"
      >
        <i class="el-icon-document"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航三</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'DcMenu',
  components: {},
  data () {
    return {};
  },
  created () { },
  mounted () { },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.menu {
  width: 200px;
  border-right: 1px solid #ddd;
  .el-menu {
    border: none;
    .el-submenu__title,
    .el-menu-item {
      height: 46px;
    }
  }
}
</style>
