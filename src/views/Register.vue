<template>
  <div class="login">
    <div class="login_header">
      <img :src="logo" alt width="45px" style="float:left" />
      <span class="title">用户注册</span>
      <span class="jump">
        <span @click="jumpToIndex">首页</span> | <span @click="jumpToBack">返回</span>
      </span>
    </div>
    <div class="contain">
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="form"
        label-position="right"
        hide-required-asterisk
      >
        <el-form-item label="昵称" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="loginForm.password2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small">立即注册</el-button>
          <el-button type="primary" size="small" @click="reset">重置</el-button>
        </el-form-item>
      <el-divider/>
      <div>
        <span>已有账号？</span>
        <el-button type="primary" size="small" @click="jumpToLogin">立即登录 </el-button>
        <el-button type="text" size="small" @click="jumpToMore" style="float:right; color:#fff; font-size:15px;">更多帮助 >> </el-button>
      </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  data () {
    return {
      loginForm: {
        password: '',
        password2: '',
        username: ''
      },
      rules: {},
      logo
    }
  },
  methods: {
    reset () {
      this.loginForm.password = ''
      this.loginForm.password2 = ''
      this.loginForm.username = ''
    },
    jumpToBack () {
      this.$router.back()
    },
    jumpToIndex () {
      this.$router.push('/')
    },
    jumpToLogin () {
      this.$router.push('/login')
    },
    jumpToMore () {
      this.$router.push('/more')
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 26px;
  font-weight: bold;
}
.form {
  margin: 20px;
  margin-right: 20px;
  width: 80%;
  overflow: hidden;
}
.contain {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border-radius: 5px;
  box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  opacity: 1;
  background: linear-gradient(
    230deg,
    rgba(53, 57, 74, 0) 0%,
    rgb(0, 0, 0) 100%
  );
  color: #fff;
  text-align: left;
}
.login .jump span:hover {
  color: #66b1ff;
}
.login .jump {
  float: right;
  padding-right: 20px;
  cursor: pointer;
}
.login_header {
  color: #fff;
  height: 40px;
  opacity: 1;
  text-align: center;
  background: linear-gradient(
    230deg,
    rgba(53, 57, 74, 0) 0%,
    rgb(0, 0, 0) 100%
  );
  padding: 20px;
  line-height: 40px;
}
.login {
  height: 100vh;
  background: url("../assets/images/bg-login.png") no-repeat center;
  background-size: 100% auto;
  overflow: hidden;
}
</style>
