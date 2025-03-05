<template>
  <section id="music-section" ref="musicSection" class="music-section" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <h2 class="section-title">My Top Tunes</h2>
      <p class="section-subtitle">Swipe or Tap Album Covers to Navigate</p>
      <ul 
        class="cards" 
        ref="cardsContainer" 
        aria-label="Music Playlist"
        role="list"
        @mousedown.prevent="startDrag"
        @touchstart.prevent="startTouchDrag"
      >
        <li 
          v-for="(track, index) in tracks" 
          :key="index" 
          :class="{ 'active': activeIndex === index }"
          :style="getCardTransform(index)"
          @click="navigateToTrack(index)"
          role="listitem"
          :aria-selected="activeIndex === index"
        >
          <img 
            :src="track.cover" 
            :alt="track.title" 
            @click.stop="playTrack(index)"
            draggable="false" 
          >
          <audio :src="track.audio" ref="audioElements"></audio>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Music',
  data() {
    return {
      tracks: [
        { 
          cover: require('../assets/avenged.jpg'), 
          audio: require('../assets/DearGod.mp3'),
          title: 'Avenged Sevenfold - Dear God'
        },
        { 
          cover: require('../assets/LP.jpg'), 
          audio: require('../assets/WID.mp3'),
          title: 'Linkin Park - What I\'ve Done'
        },
        { 
          cover: require('../assets/MB.jpg'), 
          audio: require('../assets/ThatsLife.mp3'),
          title: 'Michael Bublé - That\'s Life'
        },
        { 
          cover: require('../assets/JK.jpg'), 
          audio: require('../assets/HateYou.mp3'),
          title: 'Jungkook - Hate You'
        }
      ],
      activeIndex: 0,
      currentAudio: null,
      isDragging: false,
      startX: 0,
      currentX: 0,
      dragThreshold: 50, // Adjusted for better touch responsiveness
    };
  },
  methods: {
    startTouchDrag(e) {
      this.startDrag(e.touches[0]);
    },
    drag(e) {
      if (!this.isDragging) return;
      const touch = e.touches ? e.touches[0] : e;
      this.currentX = touch.clientX || touch.pageX;
      const diffX = this.currentX - this.startX;

      if (Math.abs(diffX) > this.dragThreshold) {
        this.activeIndex = (this.activeIndex + (diffX > 0 ? -1 : 1) + this.tracks.length) % this.tracks.length;
        this.startX = this.currentX;
        this.pauseAllAudio();
        this.playTrack(this.activeIndex);
      }
    },
    touchDrag(e) {
      e.preventDefault();
      this.drag(e.touches[0]);
    },
    getCardTransform(index) {
      const indexDiff = index - this.activeIndex;
      return {
        transform: `translateX(${indexDiff * 110}%)`,
        zIndex: 10 - Math.abs(indexDiff),
        opacity: indexDiff === 0 ? 1 : 0.5
      };
    }
  },
  mounted() {
    this.$refs.cardsContainer.addEventListener('touchmove', this.touchDrag, { passive: false });
  }
};
</script>

<style></style>
