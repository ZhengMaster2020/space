<template>
  <div class="footer">
    <p class="des">Copyright @2019-2020 hanzi.com, All Right Reserved 使用本网站及接受航资用户协议。版权所有：航资</p>
    <p class="contact">
      版权所有：航资。
      <span class="konw-more" @click="knowMore">了解更多</span>
      <span class="contact-us" @click="knowMore">联系我们</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  methods: {
    knowMore () {
      this.$router.push('/more')
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  /* height: 60px; */
  overflow: hidden;
  color: #fff;
  margin-bottom: 20px;
}
.footer .des {
  margin: 10px 0;
  text-align: center;
}
.footer .contact {
  margin: 10px;
  margin-left: 20px;
}
.footer .konw-more {
  cursor: pointer;
  width: 60px;
  height: auto;
  font-size: 14px;
  font-weight: bold;
  background: #006699;
  border-radius: 100%;
  padding: 8px
}
.footer .contact-us {
  cursor: pointer;
  float: right;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
}
</style>
