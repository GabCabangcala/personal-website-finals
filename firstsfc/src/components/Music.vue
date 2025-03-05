<!-- filepath: /workspaces/personal-website-finals/firstsfc/src/components/Music.vue -->
<template>
  <section id="music-section" class="music-section" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <h2 class="section-title">My Top 3 tunes</h2>
      <p class="section-subtitle">Press the Album cover</p>
      <ul class="cards">
        <li>
          <img src="" width="600" height="600" alt="Album Cover 1">
          <audio src=""></audio>
        </li>
        <li>
          <img src="" width="600" height="600" alt="Album Cover 2">
          <audio src=""></audio>
        </li>
        <li>
          <img src="" width="600" height="600" alt="Album Cover 3">
          <audio src=""></audio>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Music'
}
</script>

<style scoped>
:root {
    --cover-size: 200px;
    --rotation-angle: 40deg;
    --z-distance: 50px;
  }
  
  /* Update your music section styles */
  #music-section {
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
  
  /* Style for the active card */
  .cards li.active {
      z-index: 10;
  }
</style>