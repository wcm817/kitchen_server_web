<template>
  <div id="app">
    <div class="header">
      <div class="title">后台管理系统</div>
      <div class="user">
        <div class="name">
          <span class="el-icon-user-solid"></span>
          {{ username }}1111
        </div>
        <div class="list">
          <div class="list-item">修改密码</div>
          <div class="list-item">退出</div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.header {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: $main-color;
  overflow: visible;
  .title {
    line-height: 50px;
    color: #fff;
    text-align: center;
  }
  .user {
    position: absolute;
    z-index: 1;
    right: 0px;
    top: 0px;
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    color: #fff;
    overflow: visible;
    cursor: pointer;
    span {
      margin-right: 10px;
    }
    .list {
      width: 80px;
      height: 0;
      opacity: 0;
      overflow: hidden;
      background-color: #ddd;
      position: absolute;
      right: 20px;
      top: 50px;
      color: #333;
      transition: all 0.6s;
      padding: 4px 0;
      .list-item {
        height: 28px;
        line-height: 28px;
        padding: 0 10px;
        font-size: 12px;
        cursor: pointer;
        &:hover {
          background-color: #eee;
        }
      }
    }
    &:hover {
      .list {
        opacity: 1;
        height: 56px;
      }
    }
  }
}
</style>
<script>

import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['username'])
  },
}
</script>
