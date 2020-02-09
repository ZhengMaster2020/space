<template>
  <div class="more">
    <div class="more-header">
      <div class="header-logo">
        <img @click="jumpToIndex" :src="src" alt="" class=logo>
        <div class="logo-text">
          <span>航资</span>
          <span>H&Z</span>
        </div>
      </div>
      <div class="header-link">
        <span @click="jumpToIndex">首页</span> |
        <span @click="jumpToBack">返回</span>
      </div>
    </div>
    <div class="content">
      <h1>Welcome</h1>
      <p>At Website.com, we believe everyone deserves to have a website or online store.
        Innovation and simplicity makes us happy: our goal is to remove any technical or financial barriers that
        can prevent business owners from making their own website. We're excited to help you on your journey!
      </p>
      <el-row :gutter="20" class="text">
        <el-col :span="10" class="text-title">
          <h2>关于我们</h2>
        </el-col>
        <el-col :span="12" class="text-warp">
          <p>1.本网站所展现的非原创文章，我们只是航天迷的搬运工，这里会呈现资讯的浏览和周边商城的推荐</p>
          <p>2.我们尊重他人著作权、隐私等</p>
          <p>3.我们应该本着理性、宽容的心态看待不同的看法、意见和喜好等</p>
          <p>4.我们不欢迎人身攻击、恶意伤人、歧视他人等</p>
          <p>5.我们不欢迎发布垃圾信息、广告信息、病毒链接等</p>
          <p>6.我们禁止违反中国相关政策法规</p>
          <p>7.我们禁止威胁他人的人身安全、法律安全的行为</p>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="text">
        <el-col :span="10"  class="text-title">
          <h2>了解更多</h2>
        </el-col>
        <el-col  :span="12" class="text-warp">
          <p>1. 在这里，希望你可以得到心灵的愉悦，浏览到你的所思所想;</p>
          <p>2. 在这里，希望你可以结交到同道中人，一起探索宇宙的奥妙;</p>
          <p>3. 在这里，你可以看到站主随意推荐的周边商品;</p>
          <p>4. 在这里，热烈欢迎你们的到来，让我们一起成长!</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/images/logo.png'
export default {
  data () {
    return {
      src: logo
    }
  },
  methods: {
    jumpToBack () {
      this.$router.back()
    },
    jumpToIndex () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.text-title h2:hover {
  background: #657f99e0;
}
.text-title h2 {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #667bff0d;
  cursor: pointer;
  border-radius: 50%;
  transition: background 1s;
}
.text-title {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-warp {
  text-align: left;
}
.text:hover {
  background: #000000b8;
  transform: translateY(-5px);
}
.text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 10px;
  border-radius: 25px;
  text-align: center;
  background: #00000082;
}
.content p {
  font-size: 18px;
  font-weight: 300;
  letter-spacing: .05em;
  line-height: 1.5em;
  color: #fff;
  margin: 0 auto;
  width: 560px;
}
.content h1 {
  font-size: 72px;
  color: #fff;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 100;
  letter-spacing: .1em;
  line-height: 1em;
  text-align: center;
}
.content{
  background: #0000003d;
  padding: 10px 30px;
  padding-bottom: 30px;
}
.more-header {
  overflow: hidden;
  padding: 8px 20px;
}
.logo-text span {
  line-height:16px;
  height:16px;
  margin: 3px 0;
}
.logo-text{
  display: flex;
  flex-direction: column;
  color:#fff;
}
.header-logo {
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.header-link{
  color: #fff;
  float: right;
  margin: 20px;
}
.header-link span:hover{
  color:#66b1ff;
}
.header-link span {
  margin: 10px;
  cursor:pointer;
}
.logo {
  width: 60px;
  height: auto;
  border-radius: 50px;
  margin: 10px 5px;
}
.more {
  background: url('../assets/images/bg_login.jpg') no-repeat;
  background-size: 100% auto;
  padding-bottom: 50px;
}
</style>
