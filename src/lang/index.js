import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/stores'
import zhMessages from './zh'
import enMessages from './en'

Vue.use(VueI18n)

const I18n = new VueI18n({
  locale: store.state.language,
  messages: {
    zh_CN: { ...zhMessages },
    en: { ...enMessages }
  }
})

export default I18n
