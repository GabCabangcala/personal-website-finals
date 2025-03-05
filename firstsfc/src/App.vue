<!-- filepath: /workspaces/personal-website-finals/firstsfc/src/App.vue -->
<template>
  <div id="app">
    <Navigation />
    <Hero />
    <About />
    <Music />
    <Skills />
    <Activities />
    <Gallery />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Music from './components/Music.vue'
import Skills from './components/Skills.vue'
import Activities from './components/Activities.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Hero,
    About,
    Music,
    Skills,
    Activities,
    Gallery,
    Contact,
    Footer
  }
}
</script>

<style>
/* Add your global styles here */
</style>