<template>
  <section 
    id="music-section" 
    class="music-section" 
    data-aos="fade-right" 
    data-aos-anchor-placement="top-bottom" 
    ref="musicSection"
  >
    <div class="container">
      <h2 class="section-title">My Top Tunes</h2>
      <p class="section-subtitle">Click Album Covers to Navigate</p>
      <div class="cards-container">
        <button @click="handleCardClick('left')" class="arrow left-arrow">‹</button>
        <ul class="cards" ref="cardsContainer">
          <li 
            v-for="(track, index) in tracks" 
            :key="index" 
            :class="{ 'active': activeIndex === index }"
            :style="getCardStyle(index)"
            @click="playTrack(index)"
          >
            <img 
              :src="track.cover" 
              :alt="track.title"
            >
            <audio :src="track.audio" ref="audioElements"></audio>
          </li>
        </ul>
        <button @click="handleCardClick('right')" class="arrow right-arrow">›</button>
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
      observer: null
    }
  },
  mounted() {
    // Create Intersection Observer to detect when section is out of view
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            this.fadeOutAudio();
          }
        });
      },
      {
        threshold: 0.1 // Trigger when less than 10% of section is visible
      }
    );

    // Start observing the music section
    if (this.$refs.musicSection) {
      this.observer.observe(this.$refs.musicSection);
    }

    // Integrate the provided JavaScript code
    const cardsContainer = this.$refs.cardsContainer;
    const cards = cardsContainer.querySelectorAll('li');
    const musicSection = this.$refs.musicSection;
    
    let activeIndex = 0;
    let isDragging = false;
    let startX, currentX, initialOffset;
    let dragThreshold = 50; // Min distance to consider as a swipe
    let currentAudio = null; // Keep track of the current playing audio
    
    updateCoverflow();
    
    cards.forEach((card, index) => {
        card.setAttribute('data-index', index);
        card.addEventListener('click', () => {
            if (!isDragging) { // Only switch if not dragging
                activeIndex = index;
                updateCoverflow();
            }
        });
    });
    
    cardsContainer.addEventListener('mousedown', startDrag);
    cardsContainer.addEventListener('touchstart', (e) => startDrag(e.touches[0]), { passive: false });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            activeIndex = (activeIndex - 1 + cards.length) % cards.length;
            updateCoverflow();
        } else if (e.key === 'ArrowRight') {
            activeIndex = (activeIndex + 1) % cards.length;
            updateCoverflow();
        }
    });
    
    function startDrag(e) {
        if (e.button === 0 || e.touches) { // Left mouse button or touch
            isDragging = true;
            startX = e.clientX || e.pageX;
            initialOffset = activeIndex;
            cardsContainer.classList.add('dragging');
            document.addEventListener('mousemove', drag);
            document.addEventListener('touchmove', (e) => drag(e.touches[0]), { passive: false });
            document.addEventListener('mouseup', endDrag);
            document.addEventListener('touchend', endDrag);
        }
    }
    
    function drag(e) {
        if (!isDragging) return;
        currentX = e.clientX || e.pageX;
        const diffX = currentX - startX;
        const moveBy = Math.floor(diffX / dragThreshold);
        
        if (moveBy !== 0) {
            let newIndex = (initialOffset - moveBy) % cards.length;
            if (newIndex < 0) newIndex = cards.length + newIndex;
            
            if (newIndex !== activeIndex) {
                activeIndex = newIndex;
                startX = currentX;
            }
        }
    }
    
    function endDrag() {
        isDragging = false;
        cardsContainer.classList.remove('dragging');
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchend', endDrag);
        updateCoverflow(false);
    }
    
    function updateCoverflow(isDragging = false) {
        const angle = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--rotation-angle')) || 40;
        const zDist = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--z-distance')) || 50;
        const size = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cover-size')) || 200;
        
        if (isDragging) {
            cards.forEach(card => card.style.transition = 'none');
        }
        
        cards.forEach((card, index) => {
            card.classList.remove('active');
            const indexDiff = index - activeIndex;
            
            // Pause all audio tracks
            const audio = card.querySelector('audio');
            if (audio) audio.pause();
            
            if (index === activeIndex) {
                card.style.transform = `translateX(-50%) translateZ(${zDist}px)`;
                card.classList.add('active');
                
                // Play audio for active album cover
                if (audio) {
                    audio.currentTime = 0; // Reset audio to the beginning
                    audio.volume = 0.5; // Set initial volume to 0.5
                    audio.play();
                    currentAudio = audio;
                }
            } else if (index < activeIndex) {
                card.style.transform = `translateX(calc(-50% - ${Math.abs(indexDiff) * (size * 0.7)}px)) 
                                      rotateY(${angle}deg) 
                                      translateZ(0)`;
            } else {
                card.style.transform = `translateX(calc(-50% + ${Math.abs(indexDiff) * (size * 0.7)}px)) 
                                      rotateY(-${angle}deg) 
                                      translateZ(0)`;
            }
            
            card.style.zIndex = 10 - Math.abs(indexDiff);
            const maxDistance = 3; // Maximum number of visible albums on each side
            const opacity = Math.max(0, 1 - (Math.abs(indexDiff) / maxDistance));
            card.style.opacity = opacity;
        });
        
        if (isDragging) {
            setTimeout(() => cards.forEach(card => card.style.transition = 'all 0.5s ease'), 50);
        }
    }
    
    // Fade out audio when music section is out of view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting && currentAudio) {
                fadeOutAudio(currentAudio);
                currentAudio = null;
            }
        });
    });
    
    observer.observe(musicSection);
    
    function fadeOutAudio(audio) {
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
  beforeUnmount() {
    // Clean up the observer
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
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
    handleCardClick(direction) {
      if (direction === 'left' && this.activeIndex > 0) {
        this.activeIndex--;
      } else if (direction === 'right' && this.activeIndex < this.tracks.length - 1) {
        this.activeIndex++;
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
    },
    fadeOutAudio() {
      if (this.currentAudio) {
        const fadeOutInterval = setInterval(() => {
          if (this.currentAudio.volume > 0.1) {
            this.currentAudio.volume -= 0.1;
          } else {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            this.currentAudio.volume = 0.3; // Reset volume
            clearInterval(fadeOutInterval);
          }
        }, 100);
      }
    }
  }
}
</script>

<style scoped>
.music-section {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
}

#music-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  perspective: 1000px;
}

#music-section .section-title {
  font-size: 2.5em;
  margin-bottom: 20px;
}

/* Modified cards class */
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

.section-title {
  text-align: center;
  margin-bottom: 20px;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.arrow {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}
</style>