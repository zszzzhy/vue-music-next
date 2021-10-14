import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'

import lazyPlugin from 'vue3-lazy'

// 引入全局样式文件
import '@/assets/scss/index.scss'

createApp(App).use(store).use(router).use(lazyPlugin, {
  // 懒加载默认图片
  loading: require('@/assets/images/default.png')
}).mount('#app')
