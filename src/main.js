import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'  // ⬅️ import plugin

const app = createApp(App)

app.use(MotionPlugin) // ⬅️ daftarkan plugin
app.mount('#app')
