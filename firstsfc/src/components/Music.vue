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
          @click="handleTap(index)"
          role="listitem"
          :aria-selected="activeIndex === index"
        >
          <img
            :src="track.cover"
            :alt="track.title"
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
      isTap: true,
      startX: 0,
      currentX: 0,
      initialOffset: 0,
      dragThreshold: 20,
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
    handleTap(index) {
      if (this.isDragging) {
        this.isDragging = false; // Ensure it’s not considered a tap after dragging
        return;
      }

      if (this.activeIndex === index) {
        this.playTrack(index); // Play track if the same card is tapped
      } else {
        this.navigateToTrack(index); // Navigate to the tapped card
      }
    },
    navigateToTrack(index) {
      const currentTime = new Date().getTime();
      if (currentTime - this.lastClickTime < this.clickDelay) return;

      this.lastClickTime = currentTime;
      if (this.activeIndex === index) return;

      this.activeIndex = index;
      this.pauseAllAudio();
    },
    startTouchDrag(e) {
      this.isTap = true; // Assume it’s a tap until dragging is detected
      this.startDrag(e.touches[0]);
    },
    startDrag(e) {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'AUDIO') return;
      if (e.button === 0 || e.touches) {
        this.isDragging = true;
        this.isTap = false; // It's a drag if movement is detected
        this.startX = e.clientX || e.pageX;
        this.initialOffset = this.activeIndex;
        this.$refs.cardsContainer.classList.add('dragging');

        document.addEventListener('mousemove', this.drag);
        document.addEventListener('touchmove', this.touchDrag, { passive: false });
        document.addEventListener('mouseup', this.endDrag);
        document.addEventListener('touchend', this.endDrag);
      }
    },
    drag(e) {
      if (!this.isDragging) return;
      const touch = e.touches ? e.touches[0] : e;
      this.currentX = touch.clientX || touch.pageX;
      const diffX = this.currentX - this.startX;
      if (Math.abs(diffX) > this.dragThreshold) {
        this.isTap = false; // Mark as drag if threshold is exceeded
      }
    },
    touchDrag(e) {
      e.preventDefault();
      this.drag(e.touches[0]);
    },
    endDrag() {
      this.isDragging = false;
      this.$refs.cardsContainer.classList.remove('dragging');

      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('mouseup', this.endDrag);
      document.removeEventListener('touchmove', this.touchDrag);
      document.removeEventListener('touchend', this.endDrag);
    },
    pauseAllAudio() {
      this.$refs.audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    },
    playTrack(index) {
      const audio = this.$refs.audioElements[index];
      if (audio) {
        this.pauseAllAudio();
        audio.volume = 0.2;
        audio.play();
        this.currentAudio = audio;
      }
    }
  },
  mounted() {
    this.$refs.cardsContainer.addEventListener('mousedown', this.startDrag);
    this.$refs.cardsContainer.addEventListener('touchstart', this.startTouchDrag, { passive: false });
  }
};
</script>
