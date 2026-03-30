<template>
  <section id="portfolio" class="bg-white py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-title text-center">Portfolio Kami</h2>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
          <div class="h-48 bg-gradient-to-br from-gold to-darkNavy flex items-center justify-center">
            <span class="text-white text-4xl">{{ project.icon }}</span>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-darkNavy mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <a href="#" class="text-gold font-semibold hover:underline">Lihat detail →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Platform toko online dengan sistem pembayaran terintegrasi dan inventory management.',
    icon: '🛒'
  },
  {
    id: 2,
    title: 'Company Profile',
    description: 'Website profil perusahaan dengan desain modern dan SEO-friendly.',
    icon: '🏢'
  },
  {
    id: 3,
    title: 'Booking System',
    description: 'Sistem reservasi online untuk bisnis hospitality dan service.',
    icon: '📅'
  },
  {
    id: 4,
    title: 'Landing Page',
    description: 'Landing page conversion-optimized untuk campaign digital marketing.',
    icon: '📱'
  },
  {
    id: 5,
    title: 'Blog & CMS',
    description: 'Sistem manajemen konten dengan blog integration dan SEO tools.',
    icon: '📝'
  },
  {
    id: 6,
    title: 'Web Consultation',
    description: 'Konsultasi teknologi dan strategi digital untuk transformasi bisnis Anda.',
    icon: '💡'
  }
]
</script>