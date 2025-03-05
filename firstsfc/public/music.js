document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.cards');
    const cards = cardsContainer.querySelectorAll('li');
    const musicSection = document.getElementById('music-section');
    
    let activeIndex = 0;
    let isDragging = false;
    let startX, currentX, initialOffset;
    let dragThreshold = 50; // Min distance to consider as a swipe
    let currentAudio = null; // Keep track of the current playing audio
    
    updateCoverflow();
    
    cards.forEach((card, index) => {
        card.setAttribute('data-index', index);
        card.addEventListener('click', (e) => {
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
});
