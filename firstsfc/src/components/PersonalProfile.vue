<template>
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Website</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="GabCabangcala/webprog-personal-website/home/SF-Pro.dmg" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/feature2.css">
</head>

<body>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
        <a class="navbar-brand" href="#">Gab.</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#experience">Experience</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#activities">Hobbies & Goals</a>
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


    <!-- Hero Section with Carousel -->
    <div id="home" class="hero-section">
        <!-- Carousel -->
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="Images/carousel1.jpg" class="d-block w-100" alt="Image 1">
                </div>
                <div class="carousel-item">
                    <img src="Images/carousel2.jpg" class="d-block w-100" alt="Image 2">
                </div>
                <div class="carousel-item">
                    <img src="Images/carousel3.jpg" class="d-block w-100" alt="Image 3">
                </div>
            </div>
        </div>

        <!-- Hero Content -->
        <div class="hero-content">
            <h1 class="hero-title">Gab's Website</h1>
            <p class="hero-subtitle">My personal portfolio for WEBPROG subject.</p>
        </div>
        <div class="hero-overlay"></div>
    </div>

    <!-- About Section -->
    <section id="about" class="about-section section">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <img src="Images/profile.jpg" alt="Your Photo" class="about-photo hover-about-photo">
                <p class="about-text">Hello! I'm Gab, a sophomore at Asia Pacific College.</p>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section">
        <div class="container">
            <h2 class="section-title">Experience</h2>
            <div class="expertise-icons text-center mt-4">
                <div class="experience-item">
                    <i class="fab fa-python fa-3x mx-2" title="Python"></i>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div class="experience-item">
                    <i class="fab fa-java fa-3x mx-2" title="Java"></i>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div class="experience-item">
                    <i class="fab fa-figma fa-3x mx-2" title="Figma"></i>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div class="experience-item">
                    <i class="fas fa-palette fa-3x mx-2" title="Canva"></i>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div class="experience-item">
                    <i class="fab fa-microsoft fa-3x mx-2" title="Microsoft Apps"></i>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div class="experience-item">
                    <i class="fab fa-html5 fa-3x mx-2" title="HTML"></i>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div class="experience-item">
                    <i class="fab fa-bootstrap fa-3x mx-2" title="Bootstrap"></i>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div class="experience-item">
                    <i class="fab fa-css3-alt fa-3x mx-2" title="CSS"></i>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div class="experience-item">
                    <i class="fab fa-js-square fa-3x mx-2" title="JavaScript"></i>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div class="experience-item">
                    <i class="fas fa-database fa-3x mx-2" title="MySQL"></i>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Combined Hobbies and Goals Section -->
    <section id="activities" class="activities-section section">
        <div class="container">
            <h2 class="section-title">Hobbies & Goals</h2>
            <div class="activities-content">
                <div class="hobbies-box">
                    <h3>Hobbies & Interests</h3>
                    <ul class="hobbies-list">
                        <li><i class="fas fa-utensils"></i> Cooking Food</li>
                        <li><i class="fas fa-guitar"></i> Playing Guitar</li>
                        <li><i class="fas fa-hamburger"></i> Trying Different Foods</li>
                        <li><i class="fas fa-plane"></i> Traveling</li>
                    </ul>
                </div>
                <div class="goals-box">
                    <h3>Goals In Life/Dreams</h3>
                    <ul class="goals-list">
                        <li><i class="fas fa-truck-pickup"></i> Buy my dad's dream Hilux/Ranger</li>
                        <li><i class="fas fa-briefcase"></i> Have a stable job</li>
                        <li><i class="fas fa-parachute-box"></i> Learn to skydive</li>
                        <li><i class="fas fa-globe-asia"></i> Travel to Japan and Korea</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

    <!-- Vue.js Gallery Component -->
    <section id="gallery">
    <div id="app">
        <photo-gallery></photo-gallery>
    </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section py-5">
        <div class="container text-center">
            <h2 class="section-title mb-4">Contact Me</h2>
            <p class="text-muted mb-4">
                Feel free to reach out for collaboration or inquiries! <br>(probably wouldn't respond though haha)
            </p>
            <div class="d-flex justify-content-center">
                <a href="mailto:gjcabangcala@student.apc.edu.ph" class="btn btn-outline-primary me-3">
                    <i class="fas fa-envelope"></i> Email Me
                </a>
                <a href="https://www.linkedin.com/in/gabrielle-cabangcala-5a101b290/" class="btn btn-outline-info me-3" target="_blank">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/GabCabangcala" class="btn btn-outline-dark" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>
            </div>
        </div>
    </section>

    <!-- Feedback Section -->
    <div class="feedback-section">
        <h2 class="section-title">Feedback</h2>
        <form id="feedback-form" onsubmit="showPopup(event)">
            <input type="text" id="name" name="name" placeholder="Name" required><br>
            
            <textarea id="feedback" name="feedback" rows="3" placeholder="Your feedback" required></textarea><br>
            
            <input type="submit" value="Submit" class="btn btn-outline-primary">
        </form>
    </div>
    
    <!-- Popup -->
    <script src="js/function.js"></script>
    
 
    <!-- Bootstrap JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
    <script src="vue.js"></script> 
</body>

<footer class="footer">
    <div class="footer-content">
        <p>&copy; 2025 Gcabangcala. All rights reserved.</p>
        <p>
            <a href="https://twitter.com" target="_blank">Twitter</a> |
            <a href="https://facebook.com" target="_blank">Facebook</a> |
            <a href="https://instagram.com" target="_blank">Instagram</a>
        </p>
    </div>
</footer>


</html>
</template>

<script></script>
<style></style>