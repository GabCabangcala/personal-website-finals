<template>
    <footer data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div class="container">
        <p class="footer-text">&copy; 2025 Gcabangcala. All rights reserved.</p>
        <div class="footer-links">
          <a href="https://twitter.com" class="footer-link" target="_blank">Twitter</a>
          <a href="https://facebook.com" class="footer-link" target="_blank">Facebook</a>
          <a href="https://instagram.com" class="footer-link" target="_blank">Instagram</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
footer {
    background-color: var(--background-primary);
    padding: 40px 0;
    text-align: center;
    border-top: 1px solid var(--border-color);
}

.footer-text {
    font-size: 12px;
    color: var(--text-secondary);
    margin-bottom: 16px;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 24px;
}

.footer-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s ease;
}

.footer-link:hover {
    color: var(--accent-color);
}

/* RESPONSIVE DESIGN */
@media (max-width: 992px) {
    .hero-title {
        font-size: 48px;
    }
    
    .hero-subtitle {
        font-size: 24px;
    }
    
    .section-title {
        font-size: 36px;
    }
    
    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .activities-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}

@media (max-width: 768px) {
    .mobile-menu-toggle {
        display: block;
    }
    
    .nav-menu {
        position: fixed;
        top: 48px;
        left: 0;
        width: 100%;
        height: 0;
        background-color: rgba(255, 255, 255, 0.95);
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        transition: height 0.3s ease;
        backdrop-filter: saturate(180%) blur(20px);
    }
    
    .nav-menu.active {
        height: 300px;
        border-bottom: 1px solid var(--border-color);
    }
    
    .nav-item {
        margin: 16px 0;
    }
    
    .hero-title {
        font-size: 40px;
    }
    
    .hero-subtitle {
        font-size: 22px;
    }
    
    .section-title {
        font-size: 32px;
    }
}
  </style>