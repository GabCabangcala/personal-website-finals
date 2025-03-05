<!-- filepath: /workspaces/personal-website-finals/firstsfc/src/components/Gallery.vue -->
<template>
  <section id="gallery" class="gallery-section" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <div id="app">
      <photo-gallery></photo-gallery>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery'
}
</script>

<style scoped>
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.gallery-item {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    aspect-ratio: 4/3;
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: scale(1.02);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>