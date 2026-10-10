<template>
  <div class="page-container gallery-page">
    <div class="header">
      <h1 class="display-text" ref="title">Gallery</h1>
    </div>
    
    <div class="gallery-grid">
      <div class="gallery-item" v-for="(img, idx) in galleryImages" :key="idx" :ref="(el) => items[idx] = el">
        <img :src="img" alt="Gallery Image" />
        <div class="overlay"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const title = ref(null)
const items = ref([])

const galleryImages = [
  '/images/hero.jpg',
  '/images/side.jpg',
  '/images/interior.jpg',
  '/images/hero.jpg',
  '/images/side.jpg'
]

onMounted(() => {
  gsap.fromTo(title.value, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
  
  items.value.forEach((item, i) => {
    gsap.fromTo(item, 
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%"
        }
      }
    )
  })
})
</script>

<style scoped>
.gallery-page {
  padding: 6rem 4rem;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.header h1 {
  font-size: 4rem;
  color: var(--accent-color);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  grid-auto-rows: 300px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
}

.gallery-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
.gallery-item:nth-child(3) { grid-row: span 2; }

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.3);
  transition: background 0.6s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-item:hover .overlay {
  background: rgba(0,0,0,0);
}
</style>
