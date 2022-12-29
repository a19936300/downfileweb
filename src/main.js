import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const myapp = createApp(App)
myapp.use(ElementPlus)
myapp.mount('#app')
