<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-wrapper">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Gab</a>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNavbar"
        :aria-expanded="isNavbarOpen"
        aria-controls="navbarNav"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div 
        class="collapse navbar-collapse" 
        :class="{ 'show': isNavbarOpen }"
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#home" @click="closeNavbar">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about" @click="closeNavbar">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills" @click="closeNavbar">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#activities" @click="closeNavbar">Activities</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery" @click="closeNavbar">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" @click="closeNavbar">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isNavbarOpen: false
    }
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen
    },
    closeNavbar() {
      this.isNavbarOpen = false
    }
  }
}
</script>

<style>
.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.container-fluid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}

.navbar-brand {
  font-weight: bold;
  color: #333;
}

.navbar-toggler {
  border: none;
  outline: none;
}

@media (max-width: 991px) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 15px;
    display: none;
  }

  .navbar-collapse.show {
    display: block;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .navbar-nav {
    flex-direction: column;
    align-items: center;
  }

  .nav-item {
    margin: 10px 0;
  }
}
</style>