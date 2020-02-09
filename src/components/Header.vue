<template>
<div class="header">
  <div class="header-left">
    <img :src="logoUrl" alt="logo" class="logo">
    <div class="i18n">
      <el-button type="primary" circle  @click="changeLange" class="i18n-btn">{{ lange }}</el-button>
    </div>
    <!-- <el-button icon="el-icon-search" circle></el-button> -->
    <el-input
      placeholder="请输入内容"
      suffix-icon="el-icon-search"
      v-model="searchValue"
      class="search-input"
    />
  </div>
  <div class="header-right">
    <el-button type="text" @click="jumpToIndex">首页</el-button>
    <el-button type="text" @click="jumpToLogin">登录</el-button>
    <el-button type="text" @click="jumpToRegister">注册</el-button>
    <el-button type="text" @click="jumpToCenter">个人中心</el-button>
    <el-button type="text" @click="jumpToMall">周边推荐</el-button>
  </div>
</div>
</template>

<script>
import logoUrl from '@/assets/logo.png'

export default {
  name: 'Header',
  data () {
    return {
      lange: 'EN',
      searchValue: '',
      logoUrl
    }
  },
  methods: {
    jumpToMall () {
      this.$router.push('/mall')
    },
    jumpToCenter () {
      this.$router.push('/center')
    },
    jumpToRegister () {
      this.$router.push('/register')
    },
    jumpToLogin () {
      this.$router.push('/login')
    },
    jumpToIndex () {
      this.$router.push('/')
    },
    changeLange () {
      if (this.lange === 'EN') {
        this.lange = 'ZH'
      } else {
        this.lange = 'EN'
      }
    }
  }
}
</script>

<style scoped>
.i18n-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
}
.i18n {
  margin: 0 10px;
}
.logo {
  margin-left: 10px;
  width: 55px;
  height: 50px;
}
.header {
  overflow: hidden;
  position: relative;
  height: 50px;
  background: #f5f5f5;
  padding: 10px;
}
.header-left{
  display: flex;
  align-items: center;
  /* position: absolute; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
  /* background: #fff; */
}
.header-right{
  /* background: #fff; */
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%)
}
.search-input {
  width: 300px;
  margin: 0 20px;
  border-radius: 25px;
}
</style>
<style>
.search-input > .el-input_inner {
  background: #f40;
  border-radius: 25px !important;
}
</style>
