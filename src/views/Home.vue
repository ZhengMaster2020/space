<template>
  <div class="home">
    <Header />
    <el-carousel :interval="4000" direction="vertical" height="400px">
      <el-carousel-item class="carousel-item" v-for="(item, key) in ImgSrcList" :key="key">
        <h3 class="medium">
          <img :src="item" alt="picture" />
        </h3>
      </el-carousel-item>
    </el-carousel>
    <div class="content-wrap">
      <!-- <el-row :gutter="20" class="content-row" v-for="type in newTypeData" :key="type"> -->
      <el-row :gutter="20" class="content-row">
        <el-col class="main-content" :span="7" v-for="item in newDataList" :key="item.type">
          <h3 class="main-content-title">{{ item.type }}</h3>
          <span class="more-detail">more</span>
          <div class="news-list">
            <div class="news" v-for="list in item.newList" :key="list.newId">
              <el-tooltip placement="top">
                <div slot="content">
                  {{ list.linkText }}
                </div>
                <!-- <li class="news-link" @click="jumpToDetail">{{ text.linkText }}</li> -->
                <li class="news-link" @click="jumpToDetail">{{ list.linkText }}</li>
              </el-tooltip>
              <img v-if="list.imgSrc" :src="list.imgSrc" alt="新闻图片" class="news-img" />
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="other-content">
        <span class="other-title">其他</span>
        <span class="other-more">more</span>
        <el-row class="other-row" :gutter="40">
          <el-col :span="11" >
            <div class="other-content-detail">
              <ul class="other-content-list" v-for="item in 5" :key="item">
                <el-tooltip placement="top">
                  <div slot="content">
                    1. 火星大气损失有新解 能更好评估红色星球宜居性,为建深空中转站，科学家开了哪些脑洞
                  </div>
                  <li class="news-link" @click="jumpToDetail">1. 火星大气损失有新解 能更好评估红色星球宜居性,为建深空中转站 dddddddsdddddddddddd，科学家开了哪些脑洞</li>
                </el-tooltip>
                <img :src="newsBg0" alt="新闻图片" class="other-news-img"/>
              </ul>
            </div>
          </el-col>
          <el-col :span="13"  class="other-col-right">
            <div class="other-content-detail">
              <ul class="other-content-list" v-for="item in 5" :key="item">
                 <el-tooltip placement="top">
                  <div slot="content">
                   {{item}}. 火星大气损失有新解 能更好评估红色星球宜居性,为建深空中转站，科学家开了哪些脑洞
                  </div>
                  <li class="news-link" @click="jumpToDetail">{{item}}. ssss火星大气损失有新解sdddddddddddddddddddddd 能更好评估红色星球宜居性,为建深空中转站，科学家开了哪些脑洞</li>
                </el-tooltip>
                <img :src="newsBg0" alt="新闻图片" class="other-news-img"/>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import i18n from '@/lang'
// import { Carousel, CarouselItem } from 'element-ui'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import newDataList from '@/mock/newDataList.js'
import newDataList from '@/mock/newTypeData.js'

// import img0 from '@/assets/images/bg-lunbo000.jpg'
// import img1 from '@/assets/images/bg-lunbo001.jpg'
// import img2 from '@/assets/images/bg-lunbo002.jpg'
// import img3 from '@/assets/images/bg-lunbo003.jpg'
// import img4 from '@/assets/images/bg-lunbo004.jpg'
import newsBg0 from '@/assets/images/news-bg0.jpg'
// import newsBg1 from '@/assets/images/news-bg1.jpg'
// import newsBg2 from '@/assets/images/news-bg2.jpg'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
    // Carouses
  },
  data () {
    return {
      // newTypeData,
      i18n,
      newDataList,
      newsBg0,
      ImgSrcList: [
        `http://pic3.40017.cn/scenery/destination/2016/01/04/15/qBFdm3.jpg`,
        `http://news.op.wpscdn.cn/uploadfile/2017/0411/20170411091813702.jpeg`,
        `http://pic1.win4000.com/wallpaper/3/58a1558bec460.jpg`,
        'http://img.iknow.bdimg.com/zhidaoribao2014/2015year/0505/2.jpg',
        `http://upload.iwshang.com/2020/0120/1579516428542.JPG`]
    }
  },
  methods: {
    jumpToDetail () {
      this.$router.push('/detail')
    },
    moreStory () {
      this.$message.success('加载更多操作')
    },
    jump () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.other-row{
  position: relative;
  padding: 0 10px;
  width: 100%;
}
.other-news-img {
  width: 600px;
  height: 280px
}
.other-content-detail {
  text-align: left;
  padding: 5px;
  margin-top: 50px;
}
.other-content-list li{
  margin-bottom: 10px;
  padding-right: 10px;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  font-size: 13px;
  color: #303133;
}
.other-content-detail {
  /* background: #5555555c; */
}
.other-title {
  position: absolute;
  top: 0;
  left: 0;
  background: #006a9975;
  padding: 10px 15px;
  border-radius: 0 25px 25px 0;
  color: #fff;
}
.other-more:hover {
  background: #006699;
}
.other-more {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  background: #006a9975;
  padding: 10px 15px;
  border-radius: 25px  0;
  cursor: pointer;
  color: #fff;
}
.other-content{
  position: relative;
  background: #fff;
  margin-right: 100px;
  padding-bottom: 20px;
}
.home {
  overflow: hidden;
}
.more-detail:hover {
  background: #006699;
}
.more-detail{
  cursor: pointer;
  background: #006a9975;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  padding: 10px 15px;
  border-radius: 25px 0;
}
.more {
  cursor: pointer;
  margin: 20px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  font-weight: 400;
  background: #fff;
  border-radius: 5px;
}
.news-list {
  /* border-radius: 5px; */
  padding: 5px 10px;
  background: #fff;
  clear: both;
  margin-top: 40px;
  border-top: 1px solid #f2f6fc;
}
.news {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  margin-bottom: 15px;
}
.news img {
  /* width: 100%; */
  /* height: 300px; */
  /* height: auto; */
  border-radius: 5px;
  margin-top: 10px;
}
.news .news-link {
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  font-size: 13px;
  color: #303133;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.news-img {
  /* width: 50%; */
  /* height: 50%; */
  width: 460px;
  height: 250px;
  margin-right: 5px;
}
.content-wrap {
  text-align: center;
  overflow: hidden;
  margin: 20px;
  border-radius: 5px;
  width: 100vw;
}
.content-row {
  margin-top: 20px;
  border-radius: 5px;
}
.main-content {
  padding: 0 !important;
  position: relative;
  text-align: left;
  background: #fff;
  overflow: hidden;
  margin: 30px 15px;
  border-radius: 0 15px;
}
.main-content-title {
  font-size: 20px;
  text-align: left;
  color: #fff;
  background: #006a9975;
  overflow: hidden;
  padding: 10px 20px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 25px 25px 0;
}
.medium img {
  width: 100%;
  height: auto;
}
.el-carousel {
  padding-top: 20px;
  margin: 20px;
  border-radius: 8px;
}
.carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}
.carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel .el-carousel__container {
    position: relative;
    height: 400px !important;
}
</style>
