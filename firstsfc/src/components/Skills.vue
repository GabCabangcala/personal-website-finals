<!-- filepath: /workspaces/personal-website-finals/firstsfc/src/components/Skills.vue -->
<template>
  <section id="skills" class="skills-section" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <p class="section-subtitle">These are the technologies and tools I've been working with.</p>
      <div class="skills-grid">
        <div class="skill-card" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
          <i class="fab fa-python skill-icon"></i>
          <h3 class="skill-title">Python</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 55%"></div>
          </div>
        </div>
        <div class="skill-card" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
          <i class="fab fa-java skill-icon"></i>
          <h3 class="skill-title">Java</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 30%"></div>
          </div>
        </div>
        <div class="skill-card" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-bottom">
          <i class="fab fa-figma skill-icon"></i>
          <h3 class="skill-title">Figma</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div class="skill-card" data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top-bottom">
          <i class="fas fa-palette skill-icon"></i>
          <h3 class="skill-title">Canva</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 80%"></div>
          </div>
        </div>
        <div class="skill-card" data-aos="fade-up" data-aos-delay="500" data-aos-anchor-placement="top-bottom">
          <i class="fab fa-microsoft skill-icon"></i>
          <h3 class="skill-title">Microsoft Apps</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 85%"></div>
          </div>
        </div>
        <div class="skill-card" data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top-bottom">
          <i class="fab fa-html5 skill-icon"></i>
          <h3 class="skill-title">HTML</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 65%"></div>
          </div>
        </div>
        <div class="skill-card" data-aos="fade-up" data-aos-delay="700" data-aos-anchor-placement="top-bottom">
          <i class="fab fa-bootstrap skill-icon"></i>
          <h3 class="skill-title">Bootstrap</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 40%"></div>
          </div>
        </div>
        <div class="skill-card" data-aos="fade-up" data-aos-delay="800" data-aos-anchor-placement="top-bottom">
          <i class="fab fa-css3-alt skill-icon"></i>
          <h3 class="skill-title">CSS</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 60%"></div>
          </div>
        </div>
        <div class="skill-card" data-aos="fade-up" data-aos-delay="900" data-aos-anchor-placement="top-bottom">
          <i class="fab fa-js-square skill-icon"></i>
          <h3 class="skill-title">JavaScript</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 35%"></div>
          </div>
        </div>
        <div class="skill-card" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">
          <i class="fas fa-database skill-icon"></i>
          <h3 class="skill-title">MySQL</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 60%"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style scoped>
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
</style>