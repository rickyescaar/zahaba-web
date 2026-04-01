<template>
  <div class="relative">
    <Navigation />
    <HeroSection />
    <PortfolioSection @view-demo="goToWedding" />
    <ContactSection />
    <footer class="bg-darkNavy text-white py-6 text-center">
      <p>&copy; 2026 ZAHABA - Jasa Pembuatan Website & Konsultan Teknologi</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Navigation from './Navigation.vue'
import HeroSection from './HeroSection.vue'
import PortfolioSection from './PortfolioSection.vue'
import ContactSection from './ContactSection.vue'

const router = useRouter()

const goToWedding = (type) => {
  if (type === 'wedding') {
    router.push('/wedding-invitation')
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
</style>
