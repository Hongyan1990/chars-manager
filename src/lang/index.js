import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ElementLocale from 'element-ui/lib/locale'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementJaLocale from 'element-ui/lib/locale/lang/ja'

import enLocale from './en_us'
import zhLocale from './zh_cn'
import jaLocale from './ja'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': {...zhLocale, ...elementZhLocale},
    'en': {...enLocale, ...elementEnLocale},
    'ja': {...jaLocale, ...elementJaLocale}
  }
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n