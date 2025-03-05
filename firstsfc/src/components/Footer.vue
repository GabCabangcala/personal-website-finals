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
  </style>