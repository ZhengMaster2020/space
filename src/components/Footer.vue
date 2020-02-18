<template>
  <div class="footer">
    <p class="des">Copyright @2019-2020 hanzi.com, All Right Reserved {{ i18n.tc('agreement') }}</p>
    <p class="contact">
      {{ i18n.tc('copyRight') }}
      <span class="konw-more" @click="knowMore">{{ i18n.tc('knowMore') }}</span>
      <span class="contact-us" @click="knowMore">{{ i18n.tc('contactUs') }}</span>
    </p>
  </div>
</template>

<script>
import i18n from '@/lang'
export default {
  name: 'Footer',
  data () {
    return {
      i18n
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
}
.footer .des {
  margin: 10px 0;
  text-align: center;
}
.footer .contact {
  margin: 10px;
  margin-left: 20px;
  margin-top: 15px;
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
