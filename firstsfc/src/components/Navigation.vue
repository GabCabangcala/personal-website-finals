<template>
  <div class="nav-wrapper" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <nav class="navbar">
        <a href="#" class="nav-brand">Gab.</a>
        <button class="mobile-menu-toggle" aria-expanded="false">
          <i class="fas fa-bars"></i>
        </button>
        <ul class="nav-menu">
          <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
          <li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>
          <li class="nav-item"><a href="#activities" class="nav-link">Activities</a></li>
          <li class="nav-item"><a href="#gallery" class="nav-link">Gallery</a></li>
          <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      const navMenu = document.querySelector('.nav-menu');

      mobileMenuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');

        // Accessibility improvement: Update ARIA attributes
        const expanded = navMenu.classList.contains('active');
        mobileMenuToggle.setAttribute('aria-expanded', expanded);
      });

      // Close menu after clicking a link
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          mobileMenuToggle.setAttribute('aria-expanded', false);
        });
      });
    });
  </script>
</template>

<style></style>
