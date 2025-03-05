<template>
  <section id="music-section" class="music-section" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <h2 class="section-title">My Top Tunes</h2>
      <p class="section-subtitle">Click Album Covers to Navigate</p>
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
      this.activeIndex = index;
    },
    getCardStyle(index) {
      const indexDiff = index - this.activeIndex;
      
      // CSS Variables
      const coverSize = 150; // Adjust this to match your --cover-size
      const rotationAngle = 40;
      
      // Styling for the active card
      if (index === this.activeIndex) {
        return {
          transform: `translateX(-50%) translateZ(50px) scale(1.2)`,
          zIndex: 10,
          opacity: 1
        };
      }
      
      // Styling for cards to the left of active card
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
      
      // Styling for cards to the right of active card
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
.cards {
      position: relative;
      list-style: none;
      padding: 0;
      margin: 0 auto;
      height: calc(var(--cover-size) * 1.5);
      display: block;
      justify-content: center;
      transform-style: preserve-3d;
      overflow: visible;
      width: 80%;
      white-space: normal;
      cursor: grab; /* Show grab cursor to indicate it's draggable */
  }
  
  /* When actively dragging */
  .cards.dragging {
      cursor: grabbing;
  }
  
  /* Updated card item styles */
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
      user-select: none; /* Prevent selection during drag */
  }
  
  /* Update image styling */
  .cards li img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      -webkit-box-reflect: below 0.5em linear-gradient(rgb(0 0 0 / 0), rgb(0 0 0 / 0.25));
      pointer-events: none; /* Makes drag smoother */
  }
  
  /* Style for the active card */
  .cards li.active {
      z-index: 10;
  }
</style>