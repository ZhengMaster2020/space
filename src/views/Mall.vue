<template>
  <div class="mall">
    <div class="header">
      <img :src="logo" alt="logo" />
      <div class="mall-header">
        <span @click="jumpToIndex">首页</span> |
        <span @click=jumpToBack>返回</span> |
        <span>我的收藏(0)</span>
      </div>
      <div class="title">周边推荐</div>
    </div>
    <el-divider content-position="center">
      <el-button type="warning" round class="sale-btn">周边热卖</el-button>
    </el-divider>
    <div class="shop">
      <el-row :gutter="10" style="padding: 20px;">
        <el-col :span="8">
          <el-card shadow="hover">
            <img :src="src" alt="PICTURE">
            <p class="name" ><a href="https://item.taobao.com/item.htm?spm=a1z0d.6639537.1997196601.3.784b7484WNDWlt&id=607443313023" target="_blank">天宫一号神舟十对接模型合金天宫1空间站神舟九航天飞船卫星模型</a> <span style="color:red">¥518.00</span></p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <img :src="src" alt="PICTURE">
            <p class="name">NASA美国航空航天局太空人宇航员航天飞船贴花修补臂章布贴补丁贴 <span style="color:red">￥35</span></p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <p class="name">宇宙星球苏联航空航天局CCCP飞机 火箭极客GEEK连帽卫衣nasa联名 <span style="color:red">￥108</span></p>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
import src from '@/assets/images/shop00.jpg'

export default {
  data () {
    return {
      logo,
      src
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
.el-divider__text {
  background-color: #303133;
  padding: 0;
}
.shop .name:hover {
  color: #000;
}
.shop .name a {
  text-decoration: none;
  color: #000;
}
.shop .name {
  margin: 10px;
  font-size: 16px;
  color: #3a3a3c;
  line-height: 25px;
  height: 25px;
  cursor: pointer;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
}
.shop img {
  width: 100%;
  height: auto;
  display: block;
}
.shop {
  background-color: rgba(241, 238, 238, 0.753);
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
}
.header {
  position: relative;
  overflow: hidden;
}
.mall .title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  font-size: 30px;
  color: #fff;
}
.mall {
  overflow: hidden;
  height: 100vh;
  background: #303133;
}
.header img {
  margin: 10px 20px;
  width: 48px;
  height: auto;
  float: left;
}
.mall-header span:hover {
  color: #66b1ff;
}
.mall-header span {
  height: 30px;
  display: inline-block;
  line-height: 30px;
  cursor:pointe r;
}
.mall-header {
  overflow: hidden;
  color: #fff;
  float: right;
  height: 30px;
  line-height: 30px;
  margin: 20px;
}
</style>
