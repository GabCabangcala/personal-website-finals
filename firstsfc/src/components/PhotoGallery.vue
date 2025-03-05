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
import gallery1 from '@/assets/gallery1.jpg'
import gallery2 from '@/assets/gallery2.jpg'
import gallery3 from '@/assets/gallery3.jpg'
import gallery4 from '@/assets/gallery4.jpg'
import gallery5 from '@/assets/gallery5.jpg'
import gallery6 from '@/assets/gallery6.jpg'
import gallery7 from '@/assets/gallery7.jpg'
import gallery8 from '@/assets/gallery8.jpg'
import gallery9 from '@/assets/gf2.jpg'
import gallery10 from '@/assets/carousel2.jpg'

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
    }
  },
  data() {
    return {
      images: [
        { src: gallery1, alt: 'Gallery Image 1' },
        { src: gallery2, alt: 'Gallery Image 2' },
        { src: gallery3, alt: 'Gallery Image 3' },
        { src: gallery4, alt: 'Gallery Image 4' },
        { src: gallery5, alt: 'Gallery Image 5' },
        { src: gallery6, alt: 'Gallery Image 6' },
        { src: gallery7, alt: 'Gallery Image 7' },
        { src: gallery8, alt: 'Gallery Image 8' },
        { src: gallery9, alt: 'Gallery Image 9' },
        { src: gallery10, alt: 'Gallery Image 10' },
      ],
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
  display: flex; /* Ensure the modal content is flexbox-centered */
  justify-content: center;
  align-items: center;
}

.modal-content img {
  max-width: 80%; /* Reduce the image size */
  max-height: 80vh; /* Maintain proper aspect ratio */
  object-fit: contain;
  border-radius: 15px; /* Add rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  transition: transform 0.3s ease; /* Add a smooth animation */
  transform: scale(0.9); /* Slightly reduce size */
}

.close {
  position: absolute; /* Adjust position for accessibility */
  top: 20px; /* Place closer to the modal */
  right: 20px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
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