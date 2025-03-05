<template>
  <section id="contact" class="contact-section" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <div class="container">
      <h2 class="section-title">Contact Me</h2>
      <div class="contact-container">
        <div class="contact-text">
          <p>Feel free to reach out for collaboration or inquiries!</p>
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
            <button type="submit" class="btn btn-block send-message-btn">Send Message</button>
          </form>
        </div>
        <div class="comments-section" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
          <h3 class="section-title">Comments</h3>
          <button @click="clearComments" class="btn btn-block clear-comments-btn">Clear Comments</button>
          <div id="messages">
            <div v-for="comment in comments" :key="comment.id" class="comment-box">
              <p><strong>{{ comment.name }}:</strong> {{ comment.comment }}</p>
            </div>
          </div>
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
      message: '',
      comments: []
    }
  },
  methods: {
    async submitForm() {
      try {
        const { data, error } = await supabase
          .from('comments')
          .insert([
            { name: this.name, comment: this.message }
          ])

        if (error) {
          console.error('Error inserting data:', error)
          console.error('Supabase response:', error)
          alert('There was an error sending your message.')
        } else {
          console.log('Data inserted:', data)
          alert('Your message has been sent!')
          this.name = ''
          this.message = ''
          this.loadComments()
        }
      } catch (err) {
        console.error('Unexpected error:', err)
        alert('There was an unexpected error sending your message.')
      }
    },
    async loadComments() {
      try {
        const { data: comments, error } = await supabase
          .from('comments')
          .select('name, comment')

        if (error) {
          console.error('Error fetching comments:', error)
          return
        }

        console.log('Comments fetched:', comments)
        this.comments = comments
      } catch (err) {
        console.error('Unexpected error:', err)
      }
    },
    clearComments() {
      this.comments = []
    }
  },
  mounted() {
    this.loadComments()
  }
}
</script>

<style>
.contact-section {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #333;
  padding: 40px 0;
}

.section-title {
  font-size: 2em;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
}

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-text {
  text-align: center;
  margin-bottom: 20px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.contact-link {
  color: #007aff;
  font-size: 1.5em;
}

.contact-form {
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  color: #fff;
  background-color: #007aff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #005bb5;
}

.comments-section {
  width: 100%;
  max-width: 500px;
}

.comment-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.clear-comments-btn {
  background-color: #ff3b30;
  margin-bottom: 10px;
}

.clear-comments-btn:hover {
  background-color: #d32f2f;
}
</style>