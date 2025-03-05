<template>
  <section id="activities" class="activities-container">
    <div class="activities-content">
      <h2 class="activities-title">Hobbies & Goals</h2>
      <p class="activities-subtitle">Exploring life, one passion at a time</p>
      
      <div class="activities-grid">
        <div class="activity-column">
          <div class="activity-card hobbies-card">
            <div class="card-header">
              <h3>Hobbies & Interests</h3>
              <span class="emoji">🌟</span>
            </div>
            <ul>
              <li>
                <span class="icon">🍳</span>
                Cooking Food
              </li>
              <li>
                <span class="icon">🎸</span>
                Playing Guitar
              </li>
              <li>
                <span class="icon">🍽️</span>
                Trying Different Foods
              </li>
              <li>
                <span class="icon">✈️</span>
                Traveling
              </li>
            </ul>
          </div>
        </div>
        
        <div class="activity-column">
          <div class="activity-card goals-card">
            <div class="card-header">
              <h3>Goals In Life</h3>
              <span class="emoji">🚀</span>
            </div>
            <ul>
              <li>
                <span class="icon">🚗</span>
                Buy Dad's Dream Truck
              </li>
              <li>
                <span class="icon">💼</span>
                Secure Stable Career
              </li>
              <li>
                <span class="icon">🪂</span>
                Learn to Skydive
              </li>
              <li>
                <span class="icon">🌏</span>
                Travel to Japan & Korea
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ActivitiesSection'
}
</script>

<style scoped>
.activities-container {
  background-color: #f9f9fc;
  padding: 4rem 1rem;
  font-family: 'Inter', sans-serif;
}

.activities-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.activities-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.activities-subtitle {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 2.5rem;
  font-style: italic;
}

.activities-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.activity-column {
  flex: 1;
  max-width: 400px;
}

.activity-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-10px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 0.75rem;
}

.card-header h3 {
  font-size: 1.25rem;
  color: #333;
  margin: 0;
}

.card-header .emoji {
  font-size: 1.5rem;
}

.activity-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activity-card li {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #555;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.activity-card li:last-child {
  border-bottom: none;
}

.activity-card .icon {
  margin-right: 0.75rem;
  font-size: 1.25rem;
}

.hobbies-card {
  border-top: 4px solid #4a90e2;
}

.goals-card {
  border-top: 4px solid #27ae60;
}

@media (max-width: 768px) {
  .activities-grid {
    flex-direction: column;
  }
}
</style>