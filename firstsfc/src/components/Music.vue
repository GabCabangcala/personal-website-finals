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
      touchStartX: 0,
      touchEndX: 0,
      minSwipeDistance: 50, // Minimum distance for a swipe to trigger navigation
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
    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },
    handleTouchMove(e) {
      // Prevent default to stop scrolling while swiping
      e.preventDefault();
    },
    handleTouchEnd(e) {
      this.touchEndX = e.changedTouches[0].clientX;
      this.handleSwipe();
    },
    handleSwipe() {
      const swipeDistance = this.touchEndX - this.touchStartX;

      if (Math.abs(swipeDistance) > this.minSwipeDistance) {
        if (swipeDistance > 0) {
          // Swipe right
          this.navigatePrevious();
        } else {
          // Swipe left
          this.navigateNext();
        }
      }
    },
    navigateNext() {
      this.activeIndex = (this.activeIndex + 1) % this.tracks.length;
      this.pauseAllAudio();
      this.playTrack(this.activeIndex);
    },
    navigatePrevious() {
      this.activeIndex = (this.activeIndex - 1 + this.tracks.length) % this.tracks.length;
      this.pauseAllAudio();
      this.playTrack(this.activeIndex);
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
        audio.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
        this.currentAudio = audio;
      }
    },
    fadeOutAudio(audio) {
      let volume = audio.volume;
      const fadeOutInterval = setInterval(() => {
        if (volume > 0.05) {
          volume -= 0.1;
          audio.volume = volume;
        } else {
          audio.volume = 0;
          audio.pause();
          clearInterval(fadeOutInterval);
        }
      }, 100);
    }
  },
  mounted() {
    const musicSection = this.$refs.cardsContainer;

    // Add touch event listeners
    musicSection.addEventListener('touchstart', this.handleTouchStart, { passive: false });
    musicSection.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    musicSection.addEventListener('touchend', this.handleTouchEnd, { passive: false });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.navigatePrevious();
      } else if (e.key === 'ArrowRight') {
        this.navigateNext();
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

    // Handle orientation changes
    window.addEventListener('resize', () => {
      // Reset any necessary states
    });
  }
};
</script>

<style scoped>
.music-section {
  padding: 20px;
  touch-action: none; /* Prevent default touch scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 300px;
}

.cards li {
  position: absolute;
  width: 200px;
  height: 200px;
  transition: transform 0.5s, opacity 0.5s;
  cursor: pointer;
}

.cards img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Media queries for smaller screens */
@media (max-width: 768px) {
  .cards {
    height: 200px;
  }

  .cards li {
    width: 150px;
    height: 150px;
  }
}
</style>