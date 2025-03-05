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
          :style="getCardStyle(index)"
          @click="moveToTrack(index)"
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
      dragThreshold: 50
    }
  },
  methods: {
    moveToTrack(index) {
      this.activeIndex = index;
      this.updateCoverflow();
    },
    getCardStyle(index) {
      const indexDiff = index - this.activeIndex;
      const coverSize = 150;
      const rotationAngle = 40;
      
      if (index === this.activeIndex) {
        return {
          transform: `translateX(-50%) translateZ(50px) scale(1.2)`,
          zIndex: 10,
          opacity: 1
        };
      }
      
      if (index < this.activeIndex) {
        return {
          transform: `
            translateX(calc(-50% - ${Math.abs(indexDiff) * (coverSize * 0.7)}px)) 
            rotateY(${rotationAngle}deg) 
            translateZ(0)
          `,
          opacity: Math.max(0, 1 - Math.abs(indexDiff) * 0.3),
          zIndex: 10 - Math.abs(indexDiff)
        };
      }
      
      return {
        transform: `
          translateX(calc(-50% + ${Math.abs(indexDiff) * (coverSize * 0.7)}px)) 
          rotateY(-${rotationAngle}deg) 
          translateZ(0)
        `,
        opacity: Math.max(0, 1 - Math.abs(indexDiff) * 0.3),
        zIndex: 10 - Math.abs(indexDiff)
      };
    },
    playTrack(index) {
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      }
      
      const audioElement = this.$refs.audioElements[index];
      audioElement.volume = 0.3;
      audioElement.play();
      this.currentAudio = audioElement;
    },
    startDrag(e) {
      if (e.button === 0 || e.touches) {
        this.isDragging = true;
        this.startX = e.clientX || e.pageX;
        this.initialOffset = this.activeIndex;
        this.$refs.cardsContainer.classList.add('dragging');
        document.addEventListener('mousemove', this.drag);
        document.addEventListener('touchmove', this.drag, { passive: false });
        document.addEventListener('mouseup', this.endDrag);
        document.addEventListener('touchend', this.endDrag);
      }
    },
    drag(e) {
      if (!this.isDragging) return;
      const currentX = e.clientX || e.pageX;
      const diffX = currentX - this.startX;
      const moveBy = Math.floor(diffX / this.dragThreshold);
      
      if (moveBy !== 0) {
        let newIndex = (this.initialOffset - moveBy) % this.tracks.length;
        if (newIndex < 0) newIndex = this.tracks.length + newIndex;
        
        if (newIndex !== this.activeIndex) {
          this.activeIndex = newIndex;
          this.startX = currentX;
        }
      }
    },
    endDrag() {
      this.isDragging = false;
      this.$refs.cardsContainer.classList.remove('dragging');
      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('touchmove', this.drag);
      document.removeEventListener('mouseup', this.endDrag);
      document.removeEventListener('touchend', this.endDrag);
      this.updateCoverflow(false);
    },
    updateCoverflow(isDragging = false) {
      const angle = 40;
      const zDist = 50;
      const size = 150;
      
      if (isDragging) {
        this.$refs.cardsContainer.querySelectorAll('li').forEach(card => card.style.transition = 'none');
      }
      
      this.$refs.cardsContainer.querySelectorAll('li').forEach((card, index) => {
        card.classList.remove('active');
        const indexDiff = index - this.activeIndex;
        
        const audio = card.querySelector('audio');
        if (audio) audio.pause();
        
        if (index === this.activeIndex) {
          card.style.transform = `translateX(-50%) translateZ(${zDist}px)`;
          card.classList.add('active');
          
          if (audio) {
            audio.currentTime = 0;
            audio.volume = 0.5;
            audio.play();
            this.currentAudio = audio;
          }
        } else if (index < this.activeIndex) {
          card.style.transform = `translateX(calc(-50% - ${Math.abs(indexDiff) * (size * 0.7)}px)) 
                                rotateY(${angle}deg) 
                                translateZ(0)`;
        } else {
          card.style.transform = `translateX(calc(-50% + ${Math.abs(indexDiff) * (size * 0.7)}px)) 
                                rotateY(-${angle}deg) 
                                translateZ(0)`;
        }
        
        card.style.zIndex = 10 - Math.abs(indexDiff);
        const maxDistance = 3;
        const opacity = Math.max(0, 1 - (Math.abs(indexDiff) / maxDistance));
        card.style.opacity = opacity;
      });
      
      if (isDragging) {
        setTimeout(() => this.$refs.cardsContainer.querySelectorAll('li').forEach(card => card.style.transition = 'all 0.5s ease'), 50);
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
    this.updateCoverflow();
    
    this.$refs.cardsContainer.addEventListener('mousedown', this.startDrag);
    this.$refs.cardsContainer.addEventListener('touchstart', (e) => this.startDrag(e.touches[0]), { passive: false });
    
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

<style scoped>
:root {
  --cover-size: 150px;
  --rotation-angle: 40deg;
  --z-distance: 50px;
}

.music-section {
  padding: 40px 20px;
  background: linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
  margin-bottom: 50px;
  position: relative;
}

.music-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.05);
  transform: rotate(-45deg);
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  perspective: 1500px;
  perspective-origin: center center;
}

.section-title {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.cards {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  height: calc(var(--cover-size) * 1.5);
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  overflow: visible;
  width: 100%;
  white-space: nowrap;
  cursor: grab;
}

.cards li {
  position: absolute;
  width: var(--cover-size);
  height: var(--cover-size);
  left: 50%;
  top: 0;
  transform-origin: center center;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  cursor: pointer;
  z-index: 1;
  display: block;
  user-select: none;
}

.cards li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  -webkit-box-reflect: below 0.5em linear-gradient(rgb(0 0 0 / 0), rgb(0 0 0 / 0.25));
  pointer-events: none;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .music-section .container {
    padding: 0 10px;
  }

  .cards {
    height: calc(var(--cover-size) * 1.2);
  }

  .section-title {
    font-size: 2em;
  }

  .section-subtitle {
    font-size: 0.9em;
  }

  .cards li {
    --cover-size: 120px;
  }
}

@media screen and (max-width: 480px) {
  .cards li {
    --cover-size: 100px;
  }
}
</style>