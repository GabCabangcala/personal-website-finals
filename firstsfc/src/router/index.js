import Vue from 'vue';
import Router from 'vue-router';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Activities from '../components/Activities.vue';
import Gallery from '../components/Gallery.vue';
import Contact from '../components/Contact.vue';
import Music from '../components/Music.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    }
  ]
});