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


.nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255, 255, 255, 0.7);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    padding: 0;
}

.nav-brand {
    font-size: 22px;
    font-weight: 600;
    color: var(--text-primary);
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 28px;
}

.nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.8;
    transition: background-color 0.3s ease, color 0.3s ease, border-radius 0.3s ease;
    padding: 5px 10px;
}

.nav-link:hover {
    background-color: #F4E98C; 
    color: rgb(0, 0, 0);
    border-radius: 12px;
    opacity: 1;
}

.mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: var(--text-primary);
}

/* HERO SECTION */
.hero {
    padding: 160px 0 100px;
    text-align: center;
    background-color: var(--background-primary);
}

.hero-title {
    font-size: 56px;
    line-height: 1.07143;
    font-weight: 600;
    letter-spacing: -0.005em;
    margin-bottom: 16px;
}

.hero-subtitle {
    font-size: 28px;
    line-height: 1.10722;
    font-weight: 400;
    letter-spacing: .004em;
    color: var(--text-secondary);
    margin-bottom: 32px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* SECTION STYLING */
.section-title {
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0;
    margin-bottom: 40px;
    text-align: center;
}

.section-subtitle {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 400;
    color: var(--text-secondary);
    margin-bottom: 50px;
    text-align: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* ABOUT SECTION */
.about-section {
    background-color: var(--background-secondary);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.about-image {
    position: relative;
}

.about-image img {
    width: 90%;
    border-radius: 12px;
    box-shadow: var(--card-shadow);
}

.about-content p {
    font-size: 17px;
    line-height: 1.47059;
    margin-bottom: 24px;
    color: var(--text-primary);
}

/* MUSIC SECTION */
:root {
    --cover-size: 200px;
    --rotation-angle: 40deg;
    --z-distance: 50px;
  }
  
  /* Update your music section styles */
  #music-section {
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      overflow: hidden;
  }
  
  #music-section .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      perspective: 1000px;
  }
  
  #music-section .section-title {
      font-size: 2.5em;
      margin-bottom: 20px;
  }
  
  /* Modified cards class */
  .cards {
      position: relative;
      list-style: none;
      padding: 0;
      margin: 0 auto;
      height: calc(var(--cover-size) * 1.5);
      display: block;
      justify-content: center;
      transform-style: preserve-3d;
      overflow: visible;
      width: 80%;
      white-space: normal;
      cursor: grab; /* Show grab cursor to indicate it's draggable */
  }
  
  /* When actively dragging */
  .cards.dragging {
      cursor: grabbing;
  }
  
  /* Updated card item styles */
  .cards li {
      position: absolute;
      width: var(--cover-size);
      height: var(--cover-size);
      left: 50%;
      top: 0;
      transform-origin: center center;
      transform-style: preserve-3d;
      transition: all 0.5s ease;
      cursor: pointer;
      z-index: 1;
      display: block;
      user-select: none; /* Prevent selection during drag */
  }
  
  /* Update image styling */
  .cards li img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      -webkit-box-reflect: below 0.5em linear-gradient(rgb(0 0 0 / 0), rgb(0 0 0 / 0.25));
      pointer-events: none; /* Makes drag smoother */
  }
  
  /* Style for the active card */
  .cards li.active {
      z-index: 10;
  }

/* SKILLS SECTION */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 50px;
}

.skill-card {
    background-color: var(--background-primary);
    border-radius: 12px;
    padding: 30px;
    box-shadow: var(--card-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid var(--border-color);
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.skill-icon {
    font-size: 36px;
    color: #4F7C82;
    margin-bottom: 16px;
}

.skill-title {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 16px;
}

.skill-progress {
    height: 6px;
    background-color: #fcfcff;
    border-radius: 3px;
    overflow: hidden;
}

.skill-progress-bar {
    height: 100%;
    background-color: #9CAF88;
    border-radius: 3px;
}

/* HOBBIES & GOALS SECTION */
.activities-section {
    background-color: var(--background-secondary);
}

.activities-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.activities-card {
    background-color: var(--background-primary);
    border-radius: 12px;
    padding: 40px;
    box-shadow: var(--card-shadow);
    border: 1px solid var(--border-color);
}

.activities-card h3 {
    font-size: 24px;
    margin-bottom: 30px;
    color: var(--text-primary);
}

.activities-list {
    list-style: none;
}

.activities-list li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 17px;
}

.activities-list i {
    color: var(--accent-color);
    margin-right: 16px;
    font-size: 18px;
    width: 24px;
    text-align: center;
}

/* GALLERY SECTION */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.gallery-item {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    aspect-ratio: 4/3;
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: scale(1.02);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* CONTACT SECTION */
.contact-section {
    background-color: var(--background-secondary);
    position: relative;
}

.contact-container {
    max-width: 600px;
    margin: 0 auto;
}

.contact-text {
    text-align: center;
    margin-bottom: 40px;
}

.contact-text p {
    font-size: 17px;
    color: var(--text-secondary);
    margin-bottom: 24px;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.contact-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: var(--background-primary);
    color: var(--text-primary);
    box-shadow: var(--card-shadow);
    transition: transform 0.2s ease, background-color 0.2s ease;
    text-decoration: none;
}

.contact-link:hover {
    transform: scale(1.1);
    background-color: var(--accent-color);
    color: white;
}

.contact-form {
    background-color: var(--background-primary);
    border-radius: 16px;
    padding: 40px;
    box-shadow: var(--card-shadow);
    border: 1px solid var(--border-color);
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--text-secondary);
}

.form-control {
    width: 100%;
    padding: 13px 16px;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    font-family: var(--font-sans);
}

.form-control:focus {
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
}

textarea.form-control {
    min-height: 120px;
    resize: vertical;
}

.btn {
    display: inline-block;
    background-color: var(--accent-color);
    color: white;
    font-size: 17px;
    font-weight: 400;
    padding: 12px 24px;
    border-radius: 980px;
    border: none;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.2s ease;
}

.btn:hover {
    background-color: var(--accent-hover);
}

.btn-block {
    width: 100%;
}

/* FOOTER */
footer {
    background-color: var(--background-primary);
    padding: 40px 0;
    text-align: center;
    border-top: 1px solid var(--border-color);
}

.footer-text {
    font-size: 12px;
    color: var(--text-secondary);
    margin-bottom: 16px;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 24px;
}

.footer-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s ease;
}

.footer-link:hover {
    color: var(--accent-color);
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