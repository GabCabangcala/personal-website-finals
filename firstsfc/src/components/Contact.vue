<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Contact Me</h2>
      <div class="contact-wrapper">
        <div class="contact-info">
          <div class="contact-info-content">
            <h3>Get in Touch</h3>
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
        </div>
        
        <div class="contact-form-container">
          <div class="contact-form">
            <form id="feedback-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  v-model="name" 
                  required
                >
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="feedback" 
                  name="message" 
                  v-model="message" 
                  required
                ></textarea>
              </div>
              <button type="submit" class="send-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="comments-section">
        <div class="comments-content">
          <div class="comments-header">
            <h3>Comments</h3>
            <button 
              @click="clearComments" 
              class="clear-comments-btn"
            >
              Clear Comments
            </button>
          </div>
          <div id="messages" class="messages-container">
            <div 
              v-for="comment in comments" 
              :key="comment.id" 
              class="comment-box"
            >
              <p>
                <strong>{{ comment.name }}:</strong> 
                {{ comment.comment }}
              </p>
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

<style scoped>
:root {
  --primary-color: #007aff;
  --secondary-color: #f4f7f6;
  --text-color: #333;
  --light-text-color: #666;
  --white: #ffffff;
  --border-color: #e0e0e0;
}

.contact-section {
  background-color: var(--secondary-color);
  padding: 60px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.section-title {
  text-align: center;
  font-size: 2.5em;
  color: var(--text-color);
  margin-bottom: 40px;
  font-weight: 600;
}

.contact-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

.contact-info,
.contact-form-container {
  flex: 1;
  min-width: 300px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  padding: 30px;
}

.contact-info-content h3 {
  font-size: 1.5em;
  color: var(--text-color);
  margin-bottom: 15px;
}

.contact-info-content p {
  color: var(--light-text-color);
  margin-bottom: 20px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.contact-link {
  color: var(--primary-color);
  font-size: 1.8em;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #005bb5;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 8px;
  color: var(--text-color);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1em;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.send-button {
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #005bb5;
}

.comments-section {
  margin-top: 40px;
}

.comments-content {
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  padding: 30px;
}

.comments-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.comments-header h3 {
  font-size: 1.8em;
  color: var(--text-color);
}

.clear-comments-btn {
  background-color: #ff3b30;
  color: var(--white);
  border: none;
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.clear-comments-btn:hover {
  background-color: #d32f2f;
}

.messages-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.comment-box {
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.05);
}

.comment-box p {
  margin: 0;
  color: var(--text-color);
}

.comment-box strong {
  color: var(--light-text-color);
  margin-right: 8px;
}

@media (max-width: 768px) {
  .contact-wrapper {
    flex-direction: column;
  }

  .contact-info,
  .contact-form-container {
    width: 100%;
  }
}
</style>