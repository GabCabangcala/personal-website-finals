<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <p class="section-subtitle">{{ subtitle }}</p>
      
      <!-- Filter buttons -->
      <div class="gallery-filters">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="['filter-btn', { active: currentFilter === category }]"
          @click="filterImages(category)"
        >
          {{ category }}
        </button>
      </div>

      <!-- Gallery grid with transitions -->
      <transition-group 
        name="gallery-fade" 
        tag="div" 
        class="gallery-grid"
      >
        <div 
          v-for="(image, index) in filteredImages" 
          :key="image.id" 
          class="gallery-item"
          :class="{ 'featured': image.featured }"
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
              <span class="image-category">{{ image.category }}</span>
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
                :src="filteredImages[currentImageIndex].src" 
                :alt="filteredImages[currentImageIndex].alt"
              >
            </transition>
          </div>
          
          <div class="image-info">
            <h3>{{ filteredImages[currentImageIndex].title }}</h3>
            <p>{{ filteredImages[currentImageIndex].description }}</p>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
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
    const currentFilter = ref('All')
    const currentImageIndex = ref(0)
    const isModalOpen = ref(false)

    const images = [
      {
        id: 1,
        src: gallery1,
        alt: 'Nature Scene',
        title: 'Mountain Vista',
        category: 'Nature',
        description: 'Beautiful mountain landscape at sunset',
        featured: true
      },
      {
        id: 2,
        src: gallery2,
        alt: 'City Scene',
        title: 'Urban Exploration',
        category: 'City',
        description: 'A bustling city street at night',
        featured: false
      },
      {
        id: 3,
        src: gallery3,
        alt: 'Beach Scene',
        title: 'Sunny Beach',
        category: 'Beach',
        description: 'A sunny day at the beach',
        featured: false
      },
      {
        id: 4,
        src: gallery4,
        alt: 'Forest Scene',
        title: 'Forest Walk',
        category: 'Nature',
        description: 'A peaceful walk through the forest',
        featured: false
      },
      {
        id: 5,
        src: gallery5,
        alt: 'Mountain Scene',
        title: 'Mountain Climb',
        category: 'Nature',
        description: 'Climbing a mountain peak',
        featured: false
      },
      {
        id: 6,
        src: gallery6,
        alt: 'Desert Scene',
        title: 'Desert Adventure',
        category: 'Desert',
        description: 'Exploring the desert dunes',
        featured: false
      },
      {
        id: 7,
        src: gallery7,
        alt: 'Snow Scene',
        title: 'Snowy Landscape',
        category: 'Snow',
        description: 'A snowy landscape in winter',
        featured: false
      },
      {
        id: 8,
        src: gallery8,
        alt: 'Lake Scene',
        title: 'Lake View',
        category: 'Nature',
        description: 'A serene view of the lake',
        featured: false
      },
      {
        id: 9,
        src: gallery9,
        alt: 'Sunset Scene',
        title: 'Sunset Glow',
        category: 'Nature',
        description: 'A beautiful sunset over the hills',
        featured: false
      },
      {
        id: 10,
        src: gallery10,
        alt: 'Night Sky Scene',
        title: 'Starry Night',
        category: 'Night',
        description: 'A starry night sky',
        featured: false
      }
    ]

    const categories = computed(() => {
      const cats = ['All', ...new Set(images.map(img => img.category))]
      return cats
    })

    const filteredImages = computed(() => {
      if (currentFilter.value === 'All') return images
      return images.filter(img => img.category === currentFilter.value)
    })

    const filterImages = (category) => {
      currentFilter.value = category
    }

    const openModal = (index) => {
      currentImageIndex.value = index
      isModalOpen.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
      isModalOpen.value = false
      document.body.style.overflow = 'auto'
    }

    const nextImage = () => {
      currentImageIndex.value = (currentImageIndex.value + 1) % filteredImages.value.length
    }

    const prevImage = () => {
      currentImageIndex.value = currentImageIndex.value === 0 
        ? filteredImages.value.length - 1 
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
      currentFilter,
      currentImageIndex,
      isModalOpen,
      categories,
      filteredImages,
      filterImages,
      openModal,
      closeModal,
      nextImage,
      prevImage
    }
  }
}
</script>

<style scoped>
/* Add these new styles */
.gallery-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background: var(--background-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: var(--accent-color);
  color: white;
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

.featured {
  grid-column: span 2;
  grid-row: span 2;
}

/* Maintain existing styles and update as needed */
</style>