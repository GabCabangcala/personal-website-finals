<template>
  <section id="gallery" class="gallery-section" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <PhotoGallery />
    </div>
  </section>
</template>

<script>
import PhotoGallery from './PhotoGallery.vue'

export default {
  name: 'Gallery',
  components: {
    PhotoGallery
  }
}
</script>

<style></style>