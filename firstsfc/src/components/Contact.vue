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
          <form id="feedback-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" id="name" name="name" v-model="name" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="feedback" name="message" v-model="message" class="form-control" required></textarea>
            </div>
            <button type="submit" class="btn btn-block">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { supabase } from '../supabaseClient'

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      message: ''
    }
  },
  methods: {
    async submitForm() {
      const { data, error } = await supabase
        .from('comments')
        .insert([
          { name: this.name, message: this.message }
        ])

      if (error) {
        console.error('Error inserting data:', error)
        alert('There was an error sending your message.')
      } else {
        alert('Your message has been sent!')
        this.name = ''
        this.message = ''
      }
    }
  }
}
</script>

<style></style>