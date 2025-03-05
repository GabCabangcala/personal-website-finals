<template>
  <section id="music-section" class="music-section" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <h2 class="section-title">My Top Tunes</h2>
      <p class="section-subtitle">Drag or Click Album Covers</p>
      <div 
        class="cards-container" 
        @mousedown="startDrag" 
        @touchstart="startDragTouch"
      >
        <ul 
          class="cards" 
          ref="cardsContainer" 
          :class="{ 'is-dragging': isDragging }"
        >
          <li 
            v-for="(track, index) in tracks" 
            :key="index" 
            :class="{ 'active': activeIndex === index }"
            :style="getCardStyle(index)"
            @click="handleCardClick(index)"
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
      dragThreshold: 50
    }
  },
  methods: {
    startDragTouch(e) {
      this.startDrag(e.touches[0]);
    },
    startDrag(e) {
      this.isDragging = true;
      this.startX = e.clientX;
      
      window.addEventListener('mousemove', this.onDrag);
      window.addEventListener('mouseup', this.endDrag);
      window.addEventListener('touchmove', this.onTouchDrag, { passive: false });
      window.addEventListener('touchend', this.endDrag);
    },
    onTouchDrag(e) {
      this.onDrag(e.touches[0]);
    },
    onDrag(e) {
      if (!this.isDragging) return;
      
      this.currentX = e.clientX;
      const diffX = this.currentX - this.startX;
      
      if (Math.abs(diffX) > this.dragThreshold) {
        if (diffX > 0) {
          // Dragged right, move to previous
          this.activeIndex = (this.activeIndex - 1 + this.tracks.length) % this.tracks.length;
        } else {
          // Dragged left, move to next
          this.activeIndex = (this.activeIndex + 1) % this.tracks.length;
        }
        
        this.startX = this.currentX;
        this.$nextTick(() => {
          this.playTrack(this.activeIndex);
        });
      }
    },
    endDrag() {
      this.isDragging = false;
      
      window.removeEventListener('mousemove', this.onDrag);
      window.removeEventListener('mouseup', this.endDrag);
      window.removeEventListener('touchmove', this.onTouchDrag);
      window.removeEventListener('touchend', this.endDrag);
    },
    getCardStyle(index) {
      const indexDiff = index - this.activeIndex;
      
      if (index === this.activeIndex) {
        return {
          transform: 'translateX(-50%) translateZ(50px) scale(1.2)',
          zIndex: 10,
          opacity: 1
        };
      }
      
      if (index < this.activeIndex) {
        return {
          transform: `
            translateX(calc(-50% - ${Math.abs(indexDiff) * 100}px)) 
            rotateY(40deg) 
            scale(0.8)
          `,
          opacity: Math.max(0, 1 - Math.abs(indexDiff) * 0.3),
          zIndex: 1
        };
      }
      
      return {
        transform: `
          translateX(calc(-50% + ${Math.abs(indexDiff) * 100}px)) 
          rotateY(-40deg) 
          scale(0.8)
        `,
        opacity: Math.max(0, 1 - Math.abs(indexDiff) * 0.3),
        zIndex: 1
      };
    },
    handleCardClick(index) {
      if (!this.isDragging) {
        this.activeIndex = index;
        this.playTrack(index);
      }
    },
    playTrack(index) {
      // Stop previously playing audio
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      }
      
      // Play new audio
      const audioElement = this.$refs.audioElements[index];
      audioElement.volume = 0.3;
      audioElement.play();
      this.currentAudio = audioElement;
    }
  }
}
</script>

<style scoped>
.music-section {
  padding: 40px 0;
  background-color: #f4f4f4;
  perspective: 1000px;
}

.cards-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 300px;
  cursor: grab;
}

.cards-container.is-dragging {
  cursor: grabbing;
}

.cards {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  transform-style: preserve-3d;
}

.cards li {
  position: absolute;
  width: 200px;
  height: 200px;
  transition: all 0.5s ease;
  cursor: pointer;
  user-select: none;
}

.cards li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.section-title {
  text-align: center;
  margin-bottom: 20px;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}
</style>