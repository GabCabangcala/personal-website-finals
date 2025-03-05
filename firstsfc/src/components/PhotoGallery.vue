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
  </section>

  <teleport to="body">
    <transition name="image-zoom">
      <div 
        v-if="isModalOpen" 
        class="fullscreen-image-modal" 
        @click="closeModal"
      >
        <div class="fullscreen-image-container">
          <button class="close-btn" @click="closeModal">&times;</button>
          <div class="fullscreen-image-wrapper">
            <img 
              :src="currentImage.src" 
              :alt="currentImage.alt"
              @click.stop
            >
          </div>
          <div class="image-caption">{{ currentImage.alt }}</div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'PhotoGallery',
  props: {
    title: {
      type: String,
      default: 'Gallery'
    },
    subtitle: {
      type: String,
      default: 'A collection of moments and creations.'
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isModalOpen: false,
      currentImage: {}
    };
  },
  methods: {
    openModal(image) {
      this.currentImage = image;
      this.isModalOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.isModalOpen = false;
      document.body.style.overflow = 'auto';
    },
    handleKeyDown(event) {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    }
  },
  watch: {
    isModalOpen(newValue) {
      if (newValue) {
        window.addEventListener('keydown', this.handleKeyDown);
      } else {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
    }
  }
}
</script>

<style scoped>
.gallery-section {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  font-weight: 300;
}

.section-subtitle {
  font-size: 1.2rem;
  margin-bottom: 40px;
  text-align: center;
  color: #666;
  font-weight: 300;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 0 15px;
}

.gallery-item {
  perspective: 1000px;
}

.image-wrapper {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
}

.image-wrapper img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.4s ease;
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
  transition: all 0.4s ease;
}

.zoom-icon {
  font-size: 2rem;
  color: white;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.image-wrapper:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.12);
}

.image-wrapper:hover .image-overlay {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
}

.image-wrapper:hover .zoom-icon {
  opacity: 1;
}

.fullscreen-image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
}

.fullscreen-image-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: #333;
  font-size: 40px;
  cursor: pointer;
  line-height: 1;
  z-index: 10;
}

.fullscreen-image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreen-image-wrapper img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease;
}

.fullscreen-image-wrapper img:hover {
  transform: scale(1.02);
}

.image-caption {
  margin-top: 15px;
  color: #555;
  font-size: 1rem;
  max-width: 80%;
  text-align: center;
}

.image-zoom-enter-active,
.image-zoom-leave-active {
  transition: all 0.4s ease;
}
.image-zoom-enter-from,
.image-zoom-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Mobile Responsiveness */
@media screen and (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .image-wrapper img {
    height: 200px;
  }

  .close-btn {
    top: -30px;
    font-size: 30px;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .image-wrapper img {
    height: 250px;
  }
}
</style>