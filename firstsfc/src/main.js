import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import PersonalProfile from './components/PersonalProfile.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('personal-profile', PersonalProfile)
app.mount('#app')

