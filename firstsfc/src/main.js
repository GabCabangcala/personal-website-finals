import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'

const app = createApp(App)

app.config.productionTip = false

app.mount('#app')

AOS.init()