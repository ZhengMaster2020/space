<template>
<div class="header">
  <div class="header-left">
    <img :src="logoUrl" alt="logo" class="logo">
    <div class="i18n">
      <el-button type="primary" circle  @click="changeLanguage" class="i18n-btn">{{ lange }}</el-button>
    </div>
    <!-- <el-button icon="el-icon-search" circle></el-button> -->
    <el-input
      :placeholder="i18n.tc('pleaseEnterContent')"
      suffix-icon="el-icon-search"
      v-model="searchValue"
      class="search-input"
    />
  </div>
  <div class="header-right">
    <el-button type="text" @click="jumpToIndex">{{ i18n.tc('index') }}</el-button>
    <el-button type="text" @click="jumpToLogin">{{ i18n.tc('login') }}</el-button>
    <el-button type="text" @click="jumpToRegister">{{ i18n.tc('register') }}</el-button>
    <el-button type="text" @click="jumpToCenter">{{ i18n.tc('personalCenter') }}</el-button>
    <el-button type="text" @click="jumpToMall">{{ i18n.tc('recommend') }}</el-button>
  </div>
</div>
</template>

<script>
import logoUrl from '@/assets/images/logo.png'
import i18n from '@/lang'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      lange: 'EN',
      searchValue: '', // 搜索框绑定值
      logoUrl,
      i18n, // 国际化插件
      chooseLanguage: '' // 当前选择国际化语言
    }
  },
  computed: {
    ...mapGetters(['language'])
  },
  mounted () {
    this.chooseLanguage = this.language
  },
  methods: {
    ...mapMutations({ setLanguage: 'SET_Language' }),
    // 国际化-中英文切换
    changeLanguage () {
      if (this.lange === 'EN') {
        this.lange = 'ZH'
        this.chooseLanguage = 'zh_CN'
        this.setLanguage(this.chooseLanguage)
        i18n.locale = this.chooseLanguage
      } else {
        this.lange = 'EN'
        this.chooseLanguage = 'en'
        this.setLanguage(this.chooseLanguage)
        i18n.locale = this.chooseLanguage
      }
    },
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
  border-radius: 50%;
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
