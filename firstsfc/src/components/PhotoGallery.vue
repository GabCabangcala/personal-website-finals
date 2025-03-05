<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <p class="section-subtitle">{{ subtitle }}</p>
      
      <div class="gallery-grid">
        <div 
          class="gallery-item" 
          v-for="(image, index) in images" 
          :key="index" 
          @click="openModal(image)"
        >
          <div class="image-wrapper">
            <img :src="image.src" :alt="image.alt">
            <div class="image-overlay">
              <span class="zoom-icon">🔍</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="modal-fade">
      <div 
        v-if="isModalOpen" 
        class="modal" 
        @click.self="closeModal"
      >
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <img :src="currentImage.src" :alt="currentImage.alt">
          <div class="caption">{{ currentImage.alt }}</div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
// ... (script remains the same as in previous version)
</script>

<style scoped>
.gallery-section {
  padding: 60px 0;
  background-color: #f4f4f4;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.section-subtitle {
  font-size: 1.2rem;
  margin-bottom: 40px;
  text-align: center;
  color: #666;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  padding: 0 15px;
}

.image-wrapper {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.image-wrapper img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.zoom-icon {
  font-size: 2rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover {
  transform: scale(1.05);
}

.image-wrapper:hover .image-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}

.image-wrapper:hover .zoom-icon {
  opacity: 1;
}

.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 1200px;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.modal-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.close {
  position: absolute;
  top: -40px;
  right: 0;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

.caption {
  margin: 10px 0;
  display: block;
  text-align: center;
  color: #ccc;
  width: 100%;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>