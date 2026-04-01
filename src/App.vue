<template>
  <div>
    <router-view />
    
    <!-- Back button untuk wedding invitation page -->
    <button 
      v-if="isWeddingPage"
      @click="goHome" 
      class="fixed top-6 left-6 z-[100] bg-darkNavy/80 text-white px-4 py-2 rounded-full backdrop-blur-md border border-gold/50 hover:bg-gold transition shadow-xl"
    >
      ← Kembali ke Zahaba
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isWeddingPage = computed(() => route.name === 'wedding-invitation')

const goHome = () => {
  router.push('/')
  window.scrollTo(0, 0)
}
</script>

<style scoped>
</style>