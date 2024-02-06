<template>
  <div class="login">
    <div class="form">
      <div class="title">Kitchen后台管理系统</div>
      <el-form :model="loginData" :rules="loginRules" ref="form">
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="loginData.username"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            show-password
            clearable
            v-model="loginData.password"
          >
          </el-input>
        </el-form-item>
        <button class="login-btn" @click="hanldeLogin">登录</button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      loginData: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },
  created () { },
  mounted () { },
  methods: {
    hanldeLogin () {
      this.$refs.form.validate(async (valid) => {
        const res = await this.$post({ path: 'login', params: this.loginData });
        if (res.code === 0) {
          localStorage.setItem('kitchen', res.data.token);
          this.$router.push({ path: '/' })
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: $main-color;
  position: relative;
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 26px 20px;
    box-sizing: border-box;
    min-width: 350px;
    max-width: 600px;
    width: 40vw;
    background-color: #fff;
    border-radius: 10px;
    .title {
      padding-bottom: 26px;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
    }
    .login-btn {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border: none;
      border-radius: 4px;
      background-color: $main-color;
      color: #fff;
    }
  }
}
</style>
 