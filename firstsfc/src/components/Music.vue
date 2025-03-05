<template>
    <section id="music-section" class="music-section" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
      <div class="container">
        <h2 class="section-title">My Top Tunes</h2>
        <p class="section-subtitle">Click Album Covers to Play</p>
        <div class="cards-container">
          <ul class="cards" ref="cardsContainer">
            <li 
              v-for="(track, index) in tracks" 
              :key="index" 
              :class="{ 'active': activeIndex === index }"
              :data-index="index"
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
            cover: '/assets/avenged.jpg', 
            audio: '/assets/DearGod.mp3',
            title: 'Avenged Sevenfold - Dear God'
          },
          { 
            cover: '/assets/LP.jpg', 
            audio: '/assets/WhatI\'veDone.mp3',
            title: 'Linkin Park - What I\'ve Done'
          },
          { 
            cover: '/assets/MB.jpg', 
            audio: '/assets/ThatsLife.mp3',
            title: 'Michael Bublé - That\'s Life'
          },
          { 
            cover: '/assets/JK.jpg', 
            audio: '/assets/HateYou.mp3',
            title: 'Justin Kauflin - Hate You'
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
    mounted() {
      this.setupEventListeners();
      this.updateCoverflow();
    },
    methods: {
      setupEventListeners() {
        const container = this.$refs.cardsContainer;
        
        container.addEventListener('mousedown', this.startDrag);
        container.addEventListener('touchstart', this.startDrag, { passive: false });
        
        document.addEventListener('keydown', this.handleKeyNavigation);
      },
      startDrag(e) {
        const event = e.touches ? e.touches[0] : e;
        this.isDragging = true;
        this.startX = event.clientX;
        
        document.addEventListener('mousemove', this.drag);
        document.addEventListener('touchmove', this.drag, { passive: false });
        document.addEventListener('mouseup', this.endDrag);
        document.addEventListener('touchend', this.endDrag);
      },
      drag(e) {
        if (!this.isDragging) return;
        
        const event = e.touches ? e.touches[0] : e;
        this.currentX = event.clientX;
        const diffX = this.currentX - this.startX;
        
        if (Math.abs(diffX) > this.dragThreshold) {
          const direction = diffX > 0 ? -1 : 1;
          this.changeTrack(direction);
          this.startX = this.currentX;
        }
      },
      endDrag() {
        this.isDragging = false;
        
        document.removeEventListener('mousemove', this.drag);
        document.removeEventListener('touchmove', this.drag);
        document.removeEventListener('mouseup', this.endDrag);
        document.removeEventListener('touchend', this.endDrag);
      },
      handleKeyNavigation(e) {
        if (e.key === 'ArrowLeft') this.changeTrack(-1);
        if (e.key === 'ArrowRight') this.changeTrack(1);
      },
      changeTrack(direction) {
        this.activeIndex = (this.activeIndex + direction + this.tracks.length) % this.tracks.length;
        this.updateCoverflow();
      },
      handleCardClick(index) {
        if (!this.isDragging) {
          this.activeIndex = index;
          this.updateCoverflow();
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
        audioElement.play();
        this.currentAudio = audioElement;
      },
      updateCoverflow() {
        const cards = this.$refs.cardsContainer.children;
        
        Array.from(cards).forEach((card, index) => {
          const indexDiff = index - this.activeIndex;
          
          // Reset transforms and opacity for all cards
          card.style.transform = `translateX(-50%) translateZ(0)`;
          card.style.opacity = '1';
          card.style.zIndex = '1';
          
          // Special handling for active card
          if (index === this.activeIndex) {
            card.style.transform = `translateX(-50%) translateZ(50px) scale(1.2)`;
            card.style.zIndex = '10';
            card.style.opacity = '1';
          } else if (index < this.activeIndex) {
            // Cards to the left
            card.style.transform = `
              translateX(calc(-50% - ${Math.abs(indexDiff) * 100}px)) 
              rotateY(40deg) 
              scale(0.8)
            `;
            card.style.opacity = Math.max(0, 1 - Math.abs(indexDiff) * 0.3);
          } else {
            // Cards to the right
            card.style.transform = `
              translateX(calc(-50% + ${Math.abs(indexDiff) * 100}px)) 
              rotateY(-40deg) 
              scale(0.8)
            `;
            card.style.opacity = Math.max(0, 1 - Math.abs(indexDiff) * 0.3);
          }
        });
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