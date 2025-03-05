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
          { src: '/api/placeholder/600/450', alt: 'Gallery Image 1' },
          { src: '/api/placeholder/600/450', alt: 'Gallery Image 2' },
          { src: '/api/placeholder/600/450', alt: 'Gallery Image 3' },
          { src: '/api/placeholder/600/450', alt: 'Gallery Image 4' },
          { src: '/api/placeholder/600/450', alt: 'Gallery Image 5' },
          { src: '/api/placeholder/600/450', alt: 'Gallery Image 6' }
        ]
      };
    }
  }
  </script>
  
  <style></style>