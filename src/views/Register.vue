<template>
  <div class="login">
    <div class="login_header">
      <img :src="logo" alt width="45px" style="float:left" />
      <span class="title">{{ i18n.tc('userRegiater') }}</span>
      <span class="jump">
        <span @click="jumpToIndex">{{ i18n.tc('index') }}</span> | <span @click="jumpToBack">{{ i18n.tc('back') }}</span>
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
        <el-form-item :label="i18n.tc('name')" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item :label="i18n.tc('password')" prop="pass">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="i18n.tc('confirmPassword')" prop="checkPass">
          <el-input type="password" v-model="loginForm.password2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small">{{ i18n.tc('registerNow') }}</el-button>
          <el-button type="primary" size="small" @click="reset">{{ i18n.tc('reset') }}</el-button>
        </el-form-item>
      <el-divider/>
      <div>
        <span style="margin-right: 10px">{{ i18n.tc('haveAccount') }}</span>
        <el-button type="primary" size="small" @click="jumpToLogin">{{ i18n.tc('loginNnow') }} </el-button>
        <el-button type="text" size="small" @click="jumpToMore" style="float:right; color:#fff; font-size:15px;">{{ i18n.tc('moreHelp') }} >> </el-button>
      </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import i18n from '@/lang'
import logo from '@/assets/logo.png'
export default {
  data () {
    return {
      i18n,
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
