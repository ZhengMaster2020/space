<template>
  <div class="search-result" ref="searchDom">
    <Header/>
    <div class="content">
      <div class="result" v-if="searchResult">
        <p>找到相关的 <span style="color:#409eff;">{{ resultData.length }}</span> 内容</p>
        <div class="result-list" v-for="item in resultData" :key="item.title">
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
        </div>
      </div>
      <div v-else class="search-nodata" >
        <img :src="noSearchData" alt="搜索无结果"/>
        暂无搜索结果
      </div>
    </div>
    <!-- <Footer class="footer"/> -->
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="5"
      layout="total, prev, pager, next"
      :total="20"
    />
    <el-tag class="back" @click="jumpToBack">返回</el-tag>
  </div>
</template>

<script>
import Header from '@/components/Header'
// import Footer from '@/components/Footer'
import noSearchData from '@/assets/images/no_result.png'

export default {
  name: 'search',
  data () {
    return {
      scrollTop: '',
      currentPage: 1,
      resultData: [{
        title: '这就是搜索s内容的标题ddddd水水水水水哇水水水水水哇好多水啊啊啊啊好多水啊啊啊啊好多水啊啊啊啊吖',
        content: '这就是搜索内容的标题烦烦烦烦sssss水水水水水水水水水水踩水水水水水水哇哇哇哇哇哇烦烦这就是搜索内容的标题烦烦烦烦sssss水水水水水水水水水水踩水水水水水水哇哇哇哇哇哇烦烦这就是搜索内容的标题烦烦烦烦sssss水'
      }, {
        title: '这就是搜索q内容的标题ddddd水水水水水哇水水水水水哇好多水啊啊啊啊好多水啊啊啊啊好多水啊啊啊啊吖',
        content: '这就是搜索内容的标题烦烦烦烦sssss水水水水水水水水水水踩水水水水水水哇哇哇哇哇哇烦烦这就是搜索内容的标题烦烦烦烦sssss水水水水水水水水水水踩水水水水水水水水水水水水水踩水水水水水水水水水水水水水踩水水水水水水水水水水水水水踩水水水水水水水水水水水水水踩水水水水水水哇哇哇哇哇哇烦烦这就是搜索内容的标题烦烦烦烦sssss水'
      }, {
        title: '这就是搜sw索内容的标题ddddd水水水水水哇水水水水水哇好多水啊啊啊啊好多水啊啊啊啊好多水啊啊啊啊吖',
        content: '这就是搜索内容的标题烦烦烦烦sssss水这就是搜索内容的标题烦烦烦烦sssss水这就是搜索内容的标题烦烦烦烦sssss水这就是搜索内容的标题烦烦烦烦sssss水这就是搜索内容的标题烦烦烦烦sssss水这就是搜索内容的标题烦烦烦烦sssss水水水水水水水水水水踩水水水水水水哇哇哇哇哇哇烦烦这就是搜索内容的标题烦烦烦烦sssss水水水水水水水水水水踩水水水水水水哇哇哇哇哇哇烦烦这就是搜索内容的标题烦烦烦烦sssss水'
      }, {
        title: '这就是搜索qs内容的标题ddddd水水水水水哇水水水水水哇好多水啊啊啊啊好多水啊啊啊啊好多水啊啊啊啊吖',
        content: '这就是搜索内容的标题烦烦烦烦sssss水这就是搜索内容的标题烦烦烦烦sssss水这就是搜索内容的标题烦烦烦烦sssss水这就是搜索内容的标题烦烦烦烦sssss水这就是搜索内容的标题烦烦烦烦sssss水这就是搜索内容的标题烦烦烦烦sssss水水水水水水水水水水踩水水水水水水哇哇哇哇哇哇烦烦这就是搜索内容的标题烦烦烦烦sssss水水水水水水水水水水踩水水水水水水哇哇哇哇哇哇烦烦这就是搜索内容的标题烦烦烦烦sssss水'
      }, {
        title: '这就是qwsa搜索内容的标题ddddd水水水水水哇水水水水水哇好多水啊啊啊啊好多水啊啊啊啊好多水啊啊啊啊吖',
        content: '这就是搜索内容的标题烦烦烦烦sssss水水水水水水水水水水踩水水水水水水哇哇哇哇哇哇烦烦这就是搜索内容的标题烦烦烦烦sssss水水水水水水水水水水踩水水水水水水哇哇哇哇哇哇烦烦这就是搜索内容的标题烦烦烦烦sssss水'
      }],
      searchResult: true,
      noSearchData
    }
  },
  components: {
    Header
    // Footer
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {},
    currentPage1 () {},
    showBackBtn1 () {
      /***
      * （1）滚动条到顶部的位置：scrollTop
      * （2）当前窗口内容可视区：windowHeight
      * （2）当前内容可视区：clientHeight
      * （3）滚动条内容的总高度：scrollHeight
      */
      console.log(this.$refs.searchDom.scrollTop, 'this.refs.searchResult.scrollTop')
      console.log(this.$refs.searchDom.clientHeight, 'this.refs.searchResult.clientHeight')
      console.log(this.$refs.searchDom.scrollHeight, 'this.refs.searchResult.scrollHeight')
    },
    jumpToBack () {
      this.$router.go('-1')
    }
  }
}
</script>

<style scoped>
.pagination {
  margin: 15px;
  padding: 10px;
  background: #fff;
}
/* .result-list p::after:hover{
  color: #409eff;
}
.result-list p::after {
  content: '详 情';
  margin-left: 10px;
  font-size: 10px;
  padding: 4px;
  color: #fff;
  background: #8aadd0;
  border-radius: 5px;
  cursor: pointer;
} */
.result p {
  line-height: 25px;
  height: 25px;
  font-size: 13px;
}
.result-list h2:hover {
  color: #8aadd0;
}
.result-list h2 {
  cursor: pointer;
  width: 100%;
  line-height: 36px;
  height: 36px;
  font-weight: bold;
}
.result-list p:hover {
  padding:  0 1px;
}
.result-list {
  height: 100px;
  margin: 10px 0;
  margin-bottom: 15px;
}
.result {
  color: #303133;
  padding: 10px;
  background: #fff;
}
.back:hover{
  color: #fff;
  background: #409eff;
  border:none;
  outline: none;
}
.back {
  position: absolute;
  bottom: 30px;
  right: 32px;
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
}
.search-nodata img {
  width: 300px;
  height: 300px;
}
.search-nodata {
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 20px 10px;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 50px;
}
.content {
  margin: 20px;
  /* background: #f40; */
}
.search-result {
  height: 100vh;
  overflow: hidden;
  background: #303133;
  overflow-y: scroll;
}
.footer {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  background: #303133;
  padding-bottom: 20px;
}
</style>
