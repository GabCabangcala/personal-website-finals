<template>
  <section id="skills" class="skills-section" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <p class="section-subtitle">These are the technologies and tools I've been working with.</p>
      
      <div class="skills-grid">
        <div class="skill-card" v-for="(skill, index) in skills" :key="index" data-aos="fade-up" :data-aos-delay="index * 100" data-aos-anchor-placement="top-bottom">
          <i :class="skill.icon + ' skill-icon'"></i>
          <h3 class="skill-title">{{ skill.title }}</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" :style="{ width: skill.level }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { title: 'Python', icon: 'fab fa-python', level: '55%' },
        { title: 'Java', icon: 'fab fa-java', level: '30%' },
        { title: 'Figma', icon: 'fab fa-figma', level: '50%' },
        { title: 'Canva', icon: 'fas fa-palette', level: '80%' },
        { title: 'Microsoft Apps', icon: 'fab fa-microsoft', level: '85%' },
        { title: 'HTML', icon: 'fab fa-html5', level: '65%' },
        { title: 'Bootstrap', icon: 'fab fa-bootstrap', level: '40%' },
        { title: 'CSS', icon: 'fab fa-css3-alt', level: '60%' },
        { title: 'JavaScript', icon: 'fab fa-js-square', level: '35%' },
        { title: 'MySQL', icon: 'fas fa-database', level: '60%' },
      ]
    };
  }
};
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