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
:root {
    --background-primary: #ffffff;
    --background-secondary: #f5f5f7;
    --text-primary: #1d1d1f;
    --text-secondary: #86868b;
    --accent-color: #0071e3;
    --accent-hover: #0077ED;
    --border-color: #d2d2d7;
    --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    --font-sans: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-sans);
    background: linear-gradient(to bottom, #ffffff, #f5f5f7); /* Initial gradient */
    color: var(--text-primary);
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -0.022em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 0.3s ease; /* Smooth transition */
}
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
}

.container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
}

section {
    padding: 100px 0;
}

/* RESPONSIVE DESIGN */
@media (max-width: 992px) {
    .hero-title {
        font-size: 48px;
    }
    
    .hero-subtitle {
        font-size: 24px;
    }
    
    .section-title {
        font-size: 36px;
    }
    
    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .activities-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}

@media (max-width: 768px) {
    .mobile-menu-toggle {
        display: block;
    }
    
    .nav-menu {
        position: fixed;
        top: 48px;
        left: 0;
        width: 100%;
        height: 0;
        background-color: rgba(255, 255, 255, 0.95);
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        transition: height 0.3s ease;
        backdrop-filter: saturate(180%) blur(20px);
    }
    
    .nav-menu.active {
        height: 300px;
        border-bottom: 1px solid var(--border-color);
    }
    
    .nav-item {
        margin: 16px 0;
    }
    
    .hero-title {
        font-size: 40px;
    }
    
    .hero-subtitle {
        font-size: 22px;
    }
    
    .section-title {
        font-size: 32px;
    }
}
</style>