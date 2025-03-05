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
  </style>