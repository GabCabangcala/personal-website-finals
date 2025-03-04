import { createApp } from 'vue'
import App from './App.vue'
import HeroSection from './components/Hero.vue'
import Nav from './components/Nav.vue'
import AboutMe from './components/AboutMe.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'

const app = createApp(App)
app.component('hero-section', HeroSection)
app.component('nav', Nav)
app.component('about-me', AboutMe)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.mount('#app')