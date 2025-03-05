<template>
  <section id="activities" class="activities-section" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <h2 class="section-title">Hobbies & Goals</h2>
      <p class="section-subtitle">What I enjoy doing and what I'm working towards.</p>
      <div class="activities-grid">
        <div class="activities-card" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
          <h3>Hobbies & Interests</h3>
          <ul class="activities-list">
            <li><i class="fas fa-utensils"></i> Cooking Food</li>
            <li><i class="fas fa-guitar"></i> Playing Guitar</li>
            <li><i class="fas fa-hamburger"></i> Trying Different Foods</li>
            <li><i class="fas fa-plane"></i> Traveling</li>
          </ul>
        </div>
        <div class="activities-card" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
          <h3>Goals In Life/Dreams</h3>
          <ul class="activities-list">
            <li><i class="fas fa-truck-pickup"></i> Buy my dad's dream Hilux/Ranger</li>
            <li><i class="fas fa-briefcase"></i> Have a stable job</li>
            <li><i class="fas fa-parachute-box"></i> Learn to skydive</li>
            <li><i class="fas fa-globe-asia"></i> Travel to Japan and Korea</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Activities'
}
</script>

<style scoped>
.activities-section {
  padding: 60px 0;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.section-subtitle {
  font-size: 1.25rem;
  margin-bottom: 40px;
}

.activities-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.activities-card {
  flex: 1;
  min-width: 300px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.activities-list {
  list-style: none;
  padding: 0;
}

.activities-list li {
  font-size: 1.125rem;
  margin-bottom: 10px;
}

.activities-list i {
  margin-right: 10px;
}
</style>