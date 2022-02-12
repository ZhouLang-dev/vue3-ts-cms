import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import '@/assets/css/index.less'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/base.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
