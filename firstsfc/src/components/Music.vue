<template>
  <section id="music-section" ref="musicSection" class="music-section" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <h2 class="section-title">My Top Tunes</h2>
      <p class="section-subtitle">Click Album Covers to Navigate</p>
      <ul 
        class="cards" 
        ref="cardsContainer" 
        aria-label="Music Playlist"
        role="list"
        @mousedown="startDrag"
        @touchstart.prevent="startTouchDrag"
      >
        <li 
          v-for="(track, index) in tracks" 
          :key="index" 
          :class="{ 'active': activeIndex === index }"
          :style="getCardStyle(index)"
          @click="navigateToTrack(index)"
          role="listitem"
          :aria-selected="activeIndex === index"
        >
          <img 
            :src="track.cover" 
            :alt="track.title" 
            @click.stop="playTrack(index)"
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
      initialOffset: 0,
      dragThreshold: 50,
      lastClickTime: 0,
      clickDelay: 300 // milliseconds to prevent accidental double-clicks
    }
  },
  methods: {
    navigateToTrack(index) {
      const currentTime = new Date().getTime();
      // Prevent rapid successive clicks
      if (currentTime - this.lastClickTime < this.clickDelay) return;
      
      this.lastClickTime = currentTime;
      
      // If clicking the current active track, do nothing
      if (this.activeIndex === index) return;
      
      this.activeIndex = index;
      this.updateCoverflow();
    },
    startTouchDrag(e) {
      this.startDrag(e.touches[0]);
    },
    startDrag(e) {
      // Prevent dragging when clicking on the image to play
      if (e.target.tagName === 'IMG') return;
      
      if (e.button === 0 || e.touches) {
        this.isDragging = true;
        this.startX = e.clientX || e.pageX;
        this.initialOffset = this.activeIndex;
        this.$refs.cardsContainer.classList.add('dragging');
        
        // Add event listeners
        document.addEventListener('mousemove', this.drag);
        document.addEventListener('touchmove', this.drag, { passive: false });
        document.addEventListener('mouseup', this.endDrag);
        document.addEventListener('touchend', this.endDrag);
      }
    },
    // ... rest of the methods remain the same as in the previous implementation
  },
  mounted() {
    this.updateCoverflow();
    
    // Remove previous event listeners as they are now added in the template
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.activeIndex = (this.activeIndex - 1 + this.tracks.length) % this.tracks.length;
        this.updateCoverflow();
      } else if (e.key === 'ArrowRight') {
        this.activeIndex = (this.activeIndex + 1) % this.tracks.length;
        this.updateCoverflow();
      }
    });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && this.currentAudio) {
          this.fadeOutAudio(this.currentAudio);
          this.currentAudio = null;
        }
      });
    });
    
    observer.observe(this.$refs.musicSection);
  }
}
</script>

<style></style>