<!-- filepath: /workspaces/personal-website-finals/firstsfc/src/components/PhotoGallery.vue -->
<template>
    <section id="gallery" class="gallery-section">
      <div class="container">
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-subtitle">{{ subtitle }}</p>
        
        <div class="gallery-grid">
          <div class="gallery-item" v-for="(image, index) in images" :key="index">
            <img :src="image.src" :alt="image.alt">
          </div>
        </div>
      </div>
    </section>
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
      }
    },
    data() {
      return {
        images: [
          { src: require('@/assets/gallery1.jpg'), alt: 'Gallery Image 1' },
          { src: require('@/assets/gallery2.jpg'), alt: 'Gallery Image 2' },
          { src: require('@/assets/gallery3.jpg'), alt: 'Gallery Image 3' },
          { src: require('@/assets/gallery4.jpg'), alt: 'Gallery Image 4' },
          { src: require('@/assets/gallery5.jpg'), alt: 'Gallery Image 5' },
          { src: require('@/assets/gallery6.jpg'), alt: 'Gallery Image 6' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .gallery-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    margin-bottom: 40px;
    text-align: center;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .gallery-item {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .gallery-item:hover {
    transform: scale(1.05);
  }
  
  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>