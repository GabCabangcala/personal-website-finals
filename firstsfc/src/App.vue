<template>
  <div id="app">
    <Navigation />
    <Hero />
    <About />
    <Skills />
    <Activities />
    <Music />
    <Gallery />
    <Contact />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Activities from './components/Activities.vue';
import Music from './components/Music.vue';
import Gallery from './components/Gallery.vue';
import Contact from './components/Contact.vue';

export default {
  components: {
    Navigation,
    Hero,
    About,
    Skills,
    Activities,
    Music,
    Gallery,
    Contact
  }
}
</script>

<style>
@import './assets/styles/style.css';
</style>