<template>
  <div class="register">
    <div class="login_header">
      <span @click="jumpIndex">{{ i18n.tc('index') }}</span> | <span @click="jumpBack">{{ i18n.tc('back') }}</span>
    </div>
    <div class="title">{{ i18n.tc('welcome') }}</div>
    <div class="login_form">
      <el-form v-model="loginForm" label-position="left" class="form">
        <el-form-item :label="i18n.tc('username')" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item :label="i18n.tc('passsword')" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round style="width:100%; margin-top:15px;">{{ i18n.tc('loginNnow') }}</el-button>
        </el-form-item>
        <el-divider/>
        <div style="text-align:center">
          <span>{{ i18n.tc('noAccount') }}</span>
          <el-button @click="jumpToRegister" round type="info" style="margin-left:30px;">{{ i18n.tc('registerNow') }}</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import i18n from '@/lang'

export default {
  data () {
    return {
      i18n,
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    jumpBack () {
      this.$router.back()
    },
    jumpIndex () {
      this.$router.push('/')
    },
    jumpToRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.login_header span:hover {
  color: #66b1ff;
}
.login_header span {
  cursor: pointer;
}
.login_header {
  margin: 20px 50px 20px 0;
  color: #fff;
  float: right;
}
.login_form {
  width: 350px;
}
.title {
  margin-top: 100px;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}
.form {
  overflow: hidden;
  color: #fff;
  width: 50vh;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px;
  /* background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%); */
  box-shadow: -10px 10px 10px rgba(6, 17, 37, 0.5);
  transform: translate(-50%, -70%);
  border-radius: 5px;
  margin-top: 30px;
}
.register {
  margin: 0 auto;
  text-align: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url('../assets/images/bg-login.png') no-repeat center;
}
</style>
