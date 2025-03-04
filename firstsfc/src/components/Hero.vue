<template>
  <section id="home" class="hero animate__animated animate__fadeIn" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <h1 class="hero-title">Hello, I'm Gab.</h1>
      <p class="hero-subtitle">A sophomore at Asia Pacific College exploring technology and design.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style scoped>
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
</style>