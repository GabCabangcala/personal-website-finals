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
    },
    images: {
      type: Array,
      default: () => [
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
      ]
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

[... CSS remains the same as in the previous version ...]