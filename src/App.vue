<template>
  <div v-if="currentView === 'home'">
    <Navigation />
    <HeroSection />
    <PortfolioSection @view-demo="navigateToDemo" />
    <ContactSection />
    <footer class="bg-darkNavy text-white py-6 text-center">
      <p>&copy; 2026 ZAHABA - Jasa Pembuatan Website & Konsultan Teknologi</p>
    </footer>
  </div>

  <div v-else-if="currentView === 'wedding-demo'" class="relative">
    <button 
      @click="currentView = 'home'" 
      class="fixed top-6 left-6 z-[100] bg-darkNavy/80 text-white px-4 py-2 rounded-full backdrop-blur-md border border-gold/50 hover:bg-gold transition shadow-xl"
    >
      ← Kembali ke Zahaba
    </button>
    <WeddingInvitation />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ContactSection from './components/ContactSection.vue'
import WeddingInvitation from './components/WeddingInvitation.vue'

const currentView = ref('home')

const navigateToDemo = (type) => {
  if (type === 'wedding') {
    currentView.value = 'wedding-demo'
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
</style>