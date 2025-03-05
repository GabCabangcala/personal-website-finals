<template>
  <section id="music-section" class="music-section" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <h2 class="section-title">My Top Tunes</h2>
      <p class="section-subtitle">Click Album Covers to Navigate</p>
      <div class="cards-container">
        <ul class="cards" ref="cardsContainer">
          <li 
            v-for="(track, index) in tracks" 
            :key="index" 
            :class="{ 'active': activeIndex === index }"
            :style="getCardStyle(index)"
            @click="moveToTrack(index)"
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
      currentAudio: null
    }
  },
  methods: {
    moveToTrack(index) {
      // Calculate the direction to move
      const direction = index - this.activeIndex;
      
      // Update the active index
      this.activeIndex = index;
    },
    getCardStyle(index) {
      const indexDiff = index - this.activeIndex;
      
      // Styling for the active card
      if (index === this.activeIndex) {
        return {
          transform: 'translateX(-50%) translateZ(50px) scale(1.2)',
          zIndex: 10,
          opacity: 1
        };
      }
      
      // Styling for cards to the left of active card
      if (index < this.activeIndex) {
        return {
          transform: `
            translateX(calc(-50% - ${Math.abs(indexDiff) * 150}px)) 
            rotateY(40deg) 
            scale(0.8)
          `,
          opacity: Math.max(0, 1 - Math.abs(indexDiff) * 0.3),
          zIndex: 1
        };
      }
      
      // Styling for cards to the right of active card
      return {
        transform: `
          translateX(calc(-50% + ${Math.abs(indexDiff) * 150}px)) 
          rotateY(-40deg) 
          scale(0.8)
        `,
        opacity: Math.max(0, 1 - Math.abs(indexDiff) * 0.3),
        zIndex: 1
      };
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