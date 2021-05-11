// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import anime from 'animejs/lib/anime.es.js';
import VueAnime from 'vue-animejs';
import $ from 'jquery'
import Popper from '@popperjs/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(VueAnime);

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./lang/zh'),   // 中文语言包
    'en-US': require('./lang/en')    // 英文语言包
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
