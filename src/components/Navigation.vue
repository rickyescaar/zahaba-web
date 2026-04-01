<template>
  <nav class="sticky top-0 bg-white shadow-md z-50">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
      <img :src="logoZahaba" alt="Zahaba Logo" class="h-8 md:h-10 w-auto" />
      
      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8">
        <li><a href="#hero" class="text-darkNavy hover:text-white transition">Beranda</a></li>
        <li><a href="#portfolio" class="text-darkNavy hover:text-white transition">Portfolio</a></li>
        <li><a href="#contact" class="text-darkNavy hover:text-white transition">Kontak</a></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-darkNavy p-2 focus:outline-none" aria-label="Toggle menu">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Mobile Menu Dropdown -->
      <div 
        v-if="isMenuOpen" 
        class="absolute top-full left-0 w-full bg-gold border-t border-darkNavy/10 md:hidden shadow-lg"
      >
        <ul class="flex flex-col py-4 px-6 gap-4">
          <li><a href="#hero" @click="isMenuOpen = false" class="text-darkNavy font-semibold hover:text-white transition block">Beranda</a></li>
          <li><a href="#portfolio" @click="isMenuOpen = false" class="text-darkNavy font-semibold hover:text-white transition block">Portfolio</a></li>
          <li><a href="#contact" @click="isMenuOpen = false" class="text-darkNavy font-semibold hover:text-white transition block">Kontak</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logoZahaba from '../assets/logo_zahaba_trans.webp'

const isMenuOpen = ref(false)
</script>