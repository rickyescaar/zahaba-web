<template>
  <section id="contact" class="bg-gray-50 py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-title text-center">Hubungi Kami</h2>
      
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div>
          <h3 class="text-2xl font-bold text-darkNavy mb-6">Informasi Kontak</h3>
          
          <div class="mb-6">
            <h4 class="font-bold text-darkNavy mb-2">📧 Email</h4>
            <p class="text-gray-600">rickyteen.rizki@gmail.com</p>
          </div>
          
          <div class="mb-6">
            <h4 class="font-bold text-darkNavy mb-2">💬 WhatsApp</h4>
            <p class="text-gray-600">+62 812-9944-4884</p>
            <a 
              href="https://wa.me/6281299444884?text=Halo%20Zahaba%2C%20saya%20tertarik%20dengan%20jasa%20Anda"
              target="_blank"
              class="inline-block mt-2 text-gold font-bold hover:underline"
            >
              Chat sekarang →
            </a>
          </div>
          
          <div class="mb-6">
            <h4 class="font-bold text-darkNavy mb-2">🕐 Jam Kerja</h4>
            <p class="text-gray-600">Senin - Jumat: 09:00 - 18:00</p>
            <p class="text-gray-600">Sabtu: 09:00 - 14:00</p>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div>
          <h3 class="text-2xl font-bold text-darkNavy mb-6">Form Kontak</h3>
          <form @submit.prevent="submitForm" class="space-y-4">
            <input 
              v-model="form.name"
              type="text" 
              placeholder="Nama Anda" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <input 
              v-model="form.email"
              type="email" 
              placeholder="Email Anda" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <textarea 
              v-model="form.message"
              placeholder="Pesan Anda" 
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              required
            ></textarea>
            <button 
              type="submit"
              class="w-full px-6 py-3 bg-gold text-darkNavy font-bold rounded-lg hover:bg-opacity-90 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = async () => {
  console.log('Form submitted:', form.value)
  const message = `Halo, saya ${form.value.name}. ${form.value.message}`
  window.open(`https://wa.me/6281299444884?text=${encodeURIComponent(message)}`)
  form.value = { name: '', email: '', message: '' }
}
</script>