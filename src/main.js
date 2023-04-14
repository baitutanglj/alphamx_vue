import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// axios.defaults.baseURL='/api'
axios.defaults.baseURL = 'http://192.168.108.188:8085'

import '@/assets/scss/reset.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.config.productionTip = false
app.use(VueAxios,axios);
app.use(ElementPlus)

app.use(router)
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')



