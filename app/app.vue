<template>
  <div class="app-container" ref="appContainer">
    <nav class="fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b border-transparent flex justify-between items-center px-12"
         :class="[isScrolled ? 'h-20 bg-verano-bg/80 backdrop-blur-md border-white/5' : 'h-32 bg-transparent']">
      <div class="left text-xl tracking-[4px] font-medium text-verano-text">
        <NuxtLink to="/">VÉRANO</NuxtLink>
      </div>
      <div class="center hidden md:flex gap-10">
        <NuxtLink to="/collection" class="text-xs uppercase tracking-widest text-verano-muted hover:text-verano-text transition-colors">COLLECTION</NuxtLink>
        <NuxtLink to="/experience" class="text-xs uppercase tracking-widest text-verano-muted hover:text-verano-text transition-colors">EXPERIENCE</NuxtLink>
        <NuxtLink to="/config" class="text-xs uppercase tracking-widest text-verano-muted hover:text-verano-text transition-colors">CONFIGURATOR</NuxtLink>
        <NuxtLink to="/stories" class="text-xs uppercase tracking-widest text-verano-muted hover:text-verano-text transition-colors">STORIES</NuxtLink>
      </div>
      <div class="right flex gap-8 items-center">
        <button class="text-xs uppercase tracking-widest text-verano-text">SEARCH</button>
        <NuxtLink to="/compare" class="text-xs uppercase tracking-widest text-verano-text hidden lg:block">COMPARE</NuxtLink>
        <button class="text-xs uppercase tracking-widest text-verano-text">MENU</button>
      </div>
    </nav>
    <main class="w-full relative min-h-screen">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

const isScrolled = ref(false)
let lenis;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
  })

  lenis.on('scroll', ScrollTrigger.update)
  
  lenis.on('scroll', (e) => {
    isScrolled.value = e.animatedScroll > 50
  })

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)
})

onBeforeUnmount(() => {
  if (lenis) lenis.destroy()
})
</script>
