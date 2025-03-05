<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-grid">
        <div class="about-image">
          <img :src="profileImage" alt="Gab's Profile Photo">
        </div>
        <div class="about-content">
          <p>Hello! I'm Gab, a sophomore at Asia Pacific College with a passion for technology and creative design. I'm constantly exploring new ways to blend aesthetics with functionality.</p>
          <p>I believe that great design should be both beautiful and intuitive. Whether I'm coding or creating visuals, I focus on delivering experiences that resonate with people.</p>
          <p>My journey in tech is just beginning, but I'm excited about the possibilities ahead and eager to continue learning and growing every day.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import profileImage from '@/assets/prof.jpg'

export default {
  name: 'About',
  data() {
    return {
      profileImage
    }
  }
}
</script>

<style></style>