<template>
  <div class="page-container config-page">
    <div class="config-layout">
      <div class="config-visual">
        <img :src="currentImage" alt="Car Configuration" ref="carImg" />
      </div>
      <div class="config-controls">
        <h1 class="display-text" ref="title">Configurator</h1>
        
        <div class="control-group" ref="controls">
          <h3>Select Color</h3>
          <div class="color-options">
            <button class="color-btn black active" @click="changeColor('black')"></button>
            <button class="color-btn silver" @click="changeColor('silver')"></button>
          </div>
          
          <h3>Select Interior</h3>
          <div class="color-options">
            <button class="color-btn white" @click="changeColor('interior')"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const carImg = ref(null)
const title = ref(null)
const controls = ref(null)

const images = {
  black: '/images/hero.jpg',
  silver: '/images/side.jpg',
  interior: '/images/interior.jpg'
}

const currentImage = ref(images.black)

const changeColor = (color) => {
  gsap.to(carImg.value, { opacity: 0, duration: 0.3, onComplete: () => {
    currentImage.value = images[color]
    gsap.to(carImg.value, { opacity: 1, duration: 0.5 })
  }})
}

onMounted(() => {
  gsap.fromTo(title.value, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
  gsap.fromTo(controls.value, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.3 })
  gsap.fromTo(carImg.value, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" })
})
</script>

<style scoped>
.config-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: calc(100vh - var(--nav-height));
}

.config-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #020202;
  overflow: hidden;
}

.config-visual img {
  width: 90%;
  max-height: 80%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 50px rgba(0,0,0,0.8);
}

.config-controls {
  padding: 4rem;
  background-color: #0a0a0a;
  border-left: 1px solid #222;
}

.config-controls h1 {
  font-size: 3rem;
  margin-bottom: 3rem;
  color: var(--accent-color);
}

.control-group h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  color: #fff;
}

.color-options {
  display: flex;
  gap: 1rem;
}

.color-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
}

.color-btn:hover, .color-btn.active {
  border-color: var(--accent-color);
  transform: scale(1.1);
}

.color-btn.black { background-color: #111; }
.color-btn.silver { background-color: #aaa; }
.color-btn.white { background-color: #eee; }
</style>
