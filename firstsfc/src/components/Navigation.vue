<template>
  <div class="nav-wrapper" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <nav class="navbar">
        <a href="#" class="nav-brand">Gab.</a>
        <button class="mobile-menu-toggle">
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
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255, 255, 255, 0.7);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    padding: 0;
}

.nav-brand {
    font-size: 22px;
    font-weight: 600;
    color: var(--text-primary);
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 28px;
}

.nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.8;
    transition: background-color 0.3s ease, color 0.3s ease, border-radius 0.3s ease;
    padding: 5px 10px;
}

.nav-link:hover {
    background-color: #F4E98C; 
    color: rgb(0, 0, 0);
    border-radius: 12px;
    opacity: 1;
}

.mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: var(--text-primary);
}
</style>