<!-- filepath: /workspaces/personal-website-finals/firstsfc/src/components/Contact.vue -->
<template>
    <section id="contact" class="contact-section" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div class="container">
        <h2 class="section-title">Contact Me</h2>
        <div class="contact-container">
          <div class="contact-text">
            <p>Feel free to reach out for collaboration or inquiries!</p>
            <p>(probably wouldn't respond though haha)</p>
            <div class="contact-links">
              <a href="mailto:gjcabangcala@student.apc.edu.ph" class="contact-link">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/gabrielle-cabangcala-5a101b290/" class="contact-link" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/GabCabangcala" class="contact-link" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div class="contact-form" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
            <form id="feedback-form" @submit.prevent="showPopup">
              <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" name="name" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" name="email" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea id="feedback" name="message" class="form-control" required></textarea>
              </div>
              <button type="submit" class="btn btn-block">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    methods: {
      showPopup() {
        alert('Your message has been sent!');
      }
    }
  }
  </script>
  
  <style scoped>
.contact-section {
    background-color: var(--background-secondary);
    position: relative;
}

.contact-container {
    max-width: 600px;
    margin: 0 auto;
}

.contact-text {
    text-align: center;
    margin-bottom: 40px;
}

.contact-text p {
    font-size: 17px;
    color: var(--text-secondary);
    margin-bottom: 24px;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.contact-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: var(--background-primary);
    color: var(--text-primary);
    box-shadow: var(--card-shadow);
    transition: transform 0.2s ease, background-color 0.2s ease;
    text-decoration: none;
}

.contact-link:hover {
    transform: scale(1.1);
    background-color: var(--accent-color);
    color: white;
}

.contact-form {
    background-color: var(--background-primary);
    border-radius: 16px;
    padding: 40px;
    box-shadow: var(--card-shadow);
    border: 1px solid var(--border-color);
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--text-secondary);
}

.form-control {
    width: 100%;
    padding: 13px 16px;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    font-family: var(--font-sans);
}

.form-control:focus {
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
}

textarea.form-control {
    min-height: 120px;
    resize: vertical;
}

.btn {
    display: inline-block;
    background-color: var(--accent-color);
    color: white;
    font-size: 17px;
    font-weight: 400;
    padding: 12px 24px;
    border-radius: 980px;
    border: none;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.2s ease;
}

.btn:hover {
    background-color: var(--accent-hover);
}

.btn-block {
    width: 100%;
}
  </style>