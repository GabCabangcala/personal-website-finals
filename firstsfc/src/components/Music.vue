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
      initialOffset: 0,
      dragThreshold: 30,
      lastClickTime: 0,
      clickDelay: 300,
      rotationAngle: 40,
      zDistance: 50,
      coverSize: 200
    };
  },
  methods: {
    getCardTransform(index) {
      const indexDiff = index - this.activeIndex;
      const maxDistance = 3;
      const opacity = Math.max(0, 1 - (Math.abs(indexDiff) / maxDistance));

      if (index === this.activeIndex) {
        return {
          transform: `translateX(-50%) translateZ(${this.zDistance}px)`,
          zIndex: 10,
          opacity: 1
        };
      } else if (index < this.activeIndex) {
        return {
          transform: `translateX(calc(-50% - ${Math.abs(indexDiff) * (this.coverSize * 0.7)}px)) 
                      rotateY(${this.rotationAngle}deg) 
                      translateZ(0)`,
          zIndex: 10 - Math.abs(indexDiff),
          opacity: opacity
        };
      } else {
        return {
          transform: `translateX(calc(-50% + ${Math.abs(indexDiff) * (this.coverSize * 0.7)}px)) 
                      rotateY(-${this.rotationAngle}deg) 
                      translateZ(0)`,
          zIndex: 10 - Math.abs(indexDiff),
          opacity: opacity
        };
      }
    },
    navigateToTrack(index) {
      const currentTime = new Date().getTime();
      if (currentTime - this.lastClickTime < this.clickDelay) return;

      this.lastClickTime = currentTime;
      if (this.activeIndex === index) return;

      this.activeIndex = index;
      this.pauseAllAudio();
      this.playTrack(index);
    },
    startTouchDrag(e) {
      this.startDrag(e.touches[0]);
    },
    startDrag(e) {
      if (e.target.tagName === 'IMG') return;
      this.isDragging = true;
      this.startX = e.clientX || e.pageX || e.touches[0].clientX;
      this.initialOffset = this.activeIndex;
      this.$refs.cardsContainer.classList.add('dragging');
    },
    drag(e) {
      if (!this.isDragging) return;
      const touch = e.touches ? e.touches[0] : e;
      this.currentX = touch.clientX || touch.pageX;
      const diffX = this.currentX - this.startX;
      const moveBy = Math.floor(diffX / this.dragThreshold);

      if (moveBy !== 0) {
        let newIndex = (this.initialOffset - moveBy + this.tracks.length) % this.tracks.length;
        if (newIndex !== this.activeIndex) {
          this.activeIndex = newIndex;
          this.pauseAllAudio();
          this.playTrack(this.activeIndex);
        }
      }
    },
    endDrag() {
      this.isDragging = false;
      this.$refs.cardsContainer.classList.remove('dragging');
    }
  },
  mounted() {
    this.$refs.cardsContainer.addEventListener('mousedown', this.startDrag);
    this.$refs.cardsContainer.addEventListener('touchstart', this.startTouchDrag, { passive: true });
    document.addEventListener('mousemove', this.drag);
    document.addEventListener('touchmove', this.drag, { passive: false });
    document.addEventListener('mouseup', this.endDrag);
    document.addEventListener('touchend', this.endDrag);
  }
};
</script>

<style></style>
