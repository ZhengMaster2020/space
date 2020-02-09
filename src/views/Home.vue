<template>
  <div class="home">
    <Header />
    <Carousel :interval="4000" direction="vertical">
      <CarouselItem class="carousel-item" v-for="(item, key) in ImgSrcList" :key="key">
        <h3 class="medium">
          <img :src="item" alt="picture" />
        </h3>
      </CarouselItem>
    </Carousel>
    <div class="content-wrap">
      <el-row :gutter="20" class="content-row" v-for="type in ContentCategories" :key="type.title">
        <el-col class="main-content" :span="7" v-for="item in 3" :key="item">
          <h3 class="main-content-title">{{ type.title }}</h3>
          <div class="news-list">
            <div class="news" v-for="text in type.newsList" :key="text.linkText">
              <el-tooltip placement="top">
                <div slot="content">
                  {{text.linlText }}
                </div>
                <li class="news-link" @click="jumpToDetail">{{ text.linkText }}</li>
              </el-tooltip>
              <img :src="text.imgSrc" alt="新闻图片" class="news-img" />
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="more" @click="moreStory">
        <span>加载更多</span>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from 'element-ui'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import img0 from '@/assets/images/bg-lunbo000.jpg'
import img1 from '@/assets/images/bg-lunbo001.jpg'
import img2 from '@/assets/images/bg-lunbo002.jpg'
import img3 from '@/assets/images/bg-lunbo003.jpg'
import img4 from '@/assets/images/bg-lunbo004.jpg'

import newsBg0 from '@/assets/images/news-bg0.jpg'
import newsBg1 from '@/assets/images/news-bg1.jpg'
import newsBg2 from '@/assets/images/news-bg2.jpg'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Carousel,
    CarouselItem
  },
  data () {
    return {
      newsBg0,
      ImgSrcList: [img0, img1, img2, img3, img4],
      ContentCategories: [{
        title: '空间站',

        newsList: [{
          linkText: '11111111111111111111111111111111',
          imgSrc: newsBg0
        }, {
          linkText: '未来20年天地通信要靠它!盘点实践二十号卫星“黑科技”',
          imgSrc: newsBg1
        }]
      }, {
        title: '神州系列',
        newsList: [{
          linkText: '222222222222222222222222',
          imgSrc: newsBg1
        }]
      }, {
        title: '卫星',
        newsList: [{
          linkText: '333333333',
          imgSrc: newsBg2
        }]
      }]
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
.home {
  overflow: hidden;
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
  border-radius: 5px;
  padding: 0 10px;
  /* margin-left: 20px; */
}
.news {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  margin-bottom: 15px;
}
.news img {
  width: 100%;
  /* height: 300px; */
  border-radius: 5px;
  height: auto;
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
  width: 50%;
  height: auto;
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
  text-align: left;
  background: #fff;
  overflow: hidden;
  margin: 30px 15px;
  border-radius: 5px;
}
.main-content-title {
  font-size: 20px;
  text-align: center;
  color: #006699;
  margin: 10px;
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
</style>
