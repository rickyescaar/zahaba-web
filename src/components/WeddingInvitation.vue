<template>
  <div class="min-h-screen bg-stone-50 font-serif text-darkNavy selection:bg-gold selection:text-white">
    <!-- Header Section -->
    <header class="relative h-screen flex items-center justify-center text-center bg-stone-200 overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-60">
        <!-- Placeholder Foto Pengantin -->
        <img :src="weddingHero" alt="Wedding Header" class="w-full h-full object-cover" />
    </div>
      <div class="relative z-10 p-6 bg-black/10 backdrop-blur-sm rounded-lg border border-gold/30 mx-4">
        <p class="text-black/90 text-7x1 md:text-2xl uppercase tracking-widest mb-4">The Wedding of</p>
        <h1 class="text-5xl md:text-7xl font-light mb-2">Fulan & Fulanah</h1>
        <div class="w-24 h-px bg-gold mx-auto my-6"></div>
        <p class="text-xl md:text-2xl italic bold">20 Desember 2025</p>
      </div>
    </header>

    <!-- Countdown Section -->
    <section class="py-20 bg-white text-center">
      <h2 class="text-3xl mb-10 text-gold font-light uppercase tracking-widest">Menuju Hari Bahagia</h2>
      <div class="flex justify-center gap-4 md:gap-10">
        <div v-for="(value, unit) in countdown" :key="unit" class="flex flex-col items-center">
          <div class="text-3xl md:text-5xl font-bold text-darkNavy border-2 border-gold/20 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full mb-2">
            {{ value }}
          </div>
          <span class="text-xs md:text-sm uppercase tracking-widest text-gray-500">{{ unit }}</span>
        </div>
      </div>
    </section>

    <!-- Event Detail Section -->
    <section class="py-20 bg-stone-50">
      <div class="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <!-- Akad Nikah -->
        <div class="p-8 bg-white border border-gold/20 shadow-sm text-center transform hover:-translate-y-1 transition duration-300">
          <h3 class="text-2xl text-gold mb-4">Akad Nikah</h3>
          <div class="space-y-2 text-gray-600">
            <p class="font-bold">Sabtu, 20 Desember 2025</p>
            <p>08.00 - 10.00 WIB</p>
            <div class="w-10 h-px bg-gold/30 mx-auto my-4"></div>
            <p>Masjid Agung Syah Wali</p>
            <p class="text-sm italic">Jl. Melati No. 123, Kota Medan</p>
          </div>
        </div>
        <!-- Resepsi -->
        <div class="p-8 bg-white border border-gold/20 shadow-sm text-center transform hover:-translate-y-1 transition duration-300">
          <h3 class="text-2xl text-gold mb-4">Resepsi</h3>
          <div class="space-y-2 text-gray-600">
            <p class="font-bold">Sabtu, 20 Desember 2025</p>
            <p>11.00 - 14.00 WIB</p>
            <div class="w-10 h-px bg-gold/30 mx-auto my-4"></div>
            <p>Grand Ballroom Hotel Zahaba</p>
            <p class="text-sm italic">Jl. Raya Utama No. 45, Kota Medan</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Maps Section -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl text-center mb-10 text-gold font-light uppercase tracking-widest">Lokasi Acara</h2>
        <div class="aspect-video w-full rounded-lg overflow-hidden border-4 border-gold/10 shadow-lg grayscale hover:grayscale-0 transition duration-700">
          <!-- Placeholder Google Maps -->
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127441.90567634288!2d98.60361254335937!3d3.5852422999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131ccace70199%3A0x5039d52313580!2sMedan%2C%20Medan%20City%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1715850000000!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Guest Book Section -->
    <section class="py-20 bg-stone-50 pb-32">
      <div class="max-w-2xl mx-auto px-6">
        <h2 class="text-3xl text-center mb-10 text-gold font-light uppercase tracking-widest">Buku Tamu</h2>
        
        <!-- Comment Form Placeholder -->
        <div class="bg-white p-6 border border-gold/20 mb-10 shadow-sm">
          <div class="space-y-4">
            <input type="text" placeholder="Nama Anda" class="w-full p-3 border border-stone-200 focus:border-gold outline-none transition" />
            <textarea placeholder="Berikan ucapan & doa restu..." class="w-full p-3 border border-stone-200 focus:border-gold outline-none transition h-24"></textarea>
            <button class="bg-gold text-white px-8 py-3 w-full hover:bg-darkNavy transition tracking-widest uppercase text-sm">Kirim Ucapan</button>
          </div>
        </div>

        <!-- Dummy Comments List -->
        <div class="space-y-6">
          <div v-for="comment in dummyComments" :key="comment.id" class="p-4 bg-white border-l-4 border-gold shadow-sm">
            <p class="font-bold text-darkNavy mb-1">{{ comment.name }}</p>
            <p class="text-gray-600 italic text-sm">"{{ comment.message }}"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-darkNavy py-8 text-center text-stone-400 text-sm tracking-[0.2em]">
      &copy; 2025 ZAHABA - Undangan Pernikahan Digital Elegan
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Pastikan nama file dan ekstensinya (.png atau .jpg) sesuai dengan yang ada di folder src/assets
// Jika file aslinya adalah .jpg, ganti akhiran di bawah menjadi .jpg
import weddingHero from '../assets/Hero-wedding.png'


// State untuk Countdown
const countdown = ref({
  hari: 20,
  jam: 23,
  menit: 51,
  detik: 10
})

// Target Tanggal Acara (20 Desember 2025)
const targetDate = new Date('2025-12-20T08:00:00').getTime()
let timerInterval = null

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    clearInterval(timerInterval)
    return
  }

  countdown.value.hari = Math.floor(distance / (1000 * 60 * 60 * 24))
  countdown.value.jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  countdown.value.menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  countdown.value.detik = Math.floor((distance % (1000 * 60)) / 1000)
}

// Data Dummy untuk Buku Tamu
const dummyComments = ref([
  {
    id: 1,
    name: 'Andi & Keluarga',
    message: 'Selamat menempuh hidup baru Romeo dan Juliet! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.'
  },
  {
    id: 2,
    name: 'Siti Aminah',
    message: 'Barakallah! Senang sekali melihat kalian akhirnya bersatu. Lancar sampai hari H ya!'
  },
  {
    id: 3,
    name: 'Budi Santoso',
    message: 'Happy wedding guys! Maaf belum bisa hadir langsung, doa terbaik untuk kalian berdua dari jauh.'
  }
])

onMounted(() => {
  updateCountdown()
  timerInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timerInterval)
})
</script>

<style scoped>
/* Import font serif yang elegan (Opsional jika sudah ada di project) */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}

/* Warna emas kustom sesuai permintaan */
.text-gold {
  color: #D4AF37;
}

.bg-gold {
  background-color: #D4AF37;
}

.border-gold {
  border-color: #D4AF37;
}
</style>