<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-wrapper">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Gab</a>
      <button
        class="navbar-toggler mobile-menu-toggle"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav-menu" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#activities">Activities</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
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

@media (max-width: 992px) {
    .mobile-menu-toggle {
        display: block;
    }
}
</style>
