import { createApp } from 'vue'
import App from './App.vue'
import Hero from './components/Hero.vue'
import Nav from './components/Nav.vue'
import Country from './components/AboutMe.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'

const app = createApp(App)
app.component('hero', Hero)
app.component('nav', Nav)
app.component('country', Country)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.mount('#app')