<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-grid">
        <div class="about-image">
          <img src="/Images/prof.jpg" alt="Gab's Profile Photo">
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
export default {
  name: 'About'
}
</script>

<style scoped>
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
    width: 100%;
    border-radius: 12px;
    box-shadow: var(--card-shadow);
}

.about-content p {
    font-size: 17px;
    line-height: 1.47059;
    margin-bottom: 24px;
    color: var(--text-primary);
}
</style>