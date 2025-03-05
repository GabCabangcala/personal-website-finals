<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <p class="section-subtitle">{{ subtitle }}</p>

      <!-- Gallery grid with transitions -->
      <transition-group 
        name="gallery-fade" 
        tag="div" 
        class="gallery-grid"
      >
        <div 
          v-for="(image, index) in images" 
          :key="image.id" 
          class="gallery-item"
          @click="openModal(index)"
        >
          <div class="image-wrapper">
            <img 
              :src="image.src" 
              :alt="image.alt"
              loading="lazy"
            >
            <div class="image-overlay">
              <span class="image-title">{{ image.title }}</span>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </section>

  <!-- Fullscreen Modal -->
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="isModalOpen" class="fullscreen-modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="nav-btn prev" @click="prevImage">&lt;</button>
          <button class="nav-btn next" @click="nextImage">&gt;</button>
          <button class="close-btn" @click="closeModal">&times;</button>
          
          <div class="image-container">
            <transition name="slide-fade" mode="out-in">
              <img 
                :key="currentImageIndex"
                :src="images[currentImageIndex].src" 
                :alt="images[currentImageIndex].alt"
              >
            </transition>
          </div>
          
          <div class="image-info">
            <h3>{{ images[currentImageIndex].title }}</h3>
            <p>{{ images[currentImageIndex].description }}</p>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
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
      default: 'Photo Gallery'
    },
    subtitle: {
      type: String,
      default: 'Explore my visual journey'
    }
  },
  setup() {
    const currentImageIndex = ref(0)
    const isModalOpen = ref(false)

    const images = [
      {
        id: 1,
        src: gallery1,
        alt: 'Gallery Image 1',
        title: 'Image 1',
        description: 'Description for image 1'
      },
      {
        id: 2,
        src: gallery2,
        alt: 'Gallery Image 2',
        title: 'Image 2',
        description: 'Description for image 2'
      },
      {
        id: 3,
        src: gallery3,
        alt: 'Gallery Image 3',
        title: 'Image 3',
        description: 'Description for image 3'
      },
      {
        id: 4,
        src: gallery4,
        alt: 'Gallery Image 4',
        title: 'Image 4',
        description: 'Description for image 4'
      },
      {
        id: 5,
        src: gallery5,
        alt: 'Gallery Image 5',
        title: 'Image 5',
        description: 'Description for image 5'
      },
      {
        id: 6,
        src: gallery6,
        alt: 'Gallery Image 6',
        title: 'Image 6',
        description: 'Description for image 6'
      },
      {
        id: 7,
        src: gallery7,
        alt: 'Gallery Image 7',
        title: 'Image 7',
        description: 'Description for image 7'
      },
      {
        id: 8,
        src: gallery8,
        alt: 'Gallery Image 8',
        title: 'Image 8',
        description: 'Description for image 8'
      },
      {
        id: 9,
        src: gallery9,
        alt: 'Gallery Image 9',
        title: 'Image 9',
        description: 'Description for image 9'
      },
      {
        id: 10,
        src: gallery10,
        alt: 'Gallery Image 10',
        title: 'Image 10',
        description: 'Description for image 10'
      }
    ]

    const openModal = (index) => {
      currentImageIndex.value = index
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
    }

    const nextImage = () => {
      currentImageIndex.value = (currentImageIndex.value + 1) % images.length
    }

    const prevImage = () => {
      currentImageIndex.value = currentImageIndex.value === 0 
        ? images.length - 1 
        : currentImageIndex.value - 1
    }

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (!isModalOpen.value) return
      
      switch(e.key) {
        case 'ArrowRight': nextImage(); break
        case 'ArrowLeft': prevImage(); break
        case 'Escape': closeModal(); break
      }
    }

    // Lifecycle hooks
    onMounted(() => {
      window.addEventListener('keydown', handleKeyDown)
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeyDown)
    })

    return {
      currentImageIndex,
      isModalOpen,
      images,
      openModal,
      closeModal,
      nextImage,
      prevImage
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.gallery-section {
  padding: 40px 0;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
}

.section-subtitle {
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 40px;
  color: #666;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 Aspect Ratio */
  overflow: hidden;
}

.image-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .image-overlay {
  opacity: 1;
}

.fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.image-container {
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 Aspect Ratio */
  overflow: hidden;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-info {
  padding: 20px;
  text-align: center;
}

.image-info h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.image-info p {
  font-size: 1rem;
  color: #666;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.gallery-fade-move {
  transition: transform 0.6s ease;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(50px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>