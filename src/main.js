import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 全局样式导入
import './assets/base.css';

new Vue({
  el: '#app',
  render: h => h(App)
});