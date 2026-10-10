<template>
  <div class="page-container details-page">
    <div class="hero-image-wrapper" ref="heroWrapper">
      <img src="/images/interior.jpg" alt="Interior Details" class="hero-image" ref="heroImg" />
      <div class="overlay"></div>
      <div class="hero-text">
        <h1 class="display-text" ref="title">Nebula Luxe</h1>
        <p class="subtitle" ref="subtitle">Interior Excellence</p>
      </div>
    </div>
    
    <div class="specs-section">
      <div class="spec-item" v-for="(spec, i) in specs" :key="i" :ref="(el) => specItems[i] = el">
        <div class="spec-value display-text">{{ spec.value }}</div>
        <div class="spec-label">{{ spec.label }}</div>
      </div>
    </div>
    
    <div class="details-content">
      <div class="text-block" ref="textBlock">
        <h2>Unrivaled Comfort</h2>
        <p>Step inside and experience a sanctuary of hand-stitched leather, brushed aluminum, and next-generation carbon fiber. The Nebula Luxe is designed around the driver, offering a cockpit that feels both futuristic and intimately connected to the road.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const heroWrapper = ref(null)
const heroImg = ref(null)
const title = ref(null)
const subtitle = ref(null)
const specItems = ref([])
const textBlock = ref(null)

const specs = [
  { value: '0.19', label: 'Drag Coefficient' },
  { value: 'Hand-stitched', label: 'Leather Interior' },
  { value: '18', label: 'Speaker Audio' }
]

onMounted(() => {
  // Hero reveal
  gsap.fromTo(heroImg.value, 
    { scale: 1.1 }, 
    { scale: 1, duration: 2, ease: "power2.out" }
  )
  gsap.fromTo([title.value, subtitle.value],
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 }
  )
  
  // Parallax on scroll
  gsap.to(heroImg.value, {
    y: 150,
    ease: "none",
    scrollTrigger: {
      trigger: heroWrapper.value,
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })

  // Specs reveal
  specItems.value.forEach((item, i) => {
    gsap.fromTo(item,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: i * 0.1,
        scrollTrigger: {
          trigger: '.specs-section',
          start: "top 80%"
        }
      }
    )
  })

  // Text block
  gsap.fromTo(textBlock.value,
    { y: 50, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1, ease: "power3.out",
      scrollTrigger: {
        trigger: textBlock.value,
        start: "top 85%"
      }
    }
  )
})
</script>

<style scoped>
.hero-image-wrapper {
  position: relative;
  height: 80vh;
  width: 100%;
  overflow: hidden;
  margin-top: calc(var(--nav-height) * -1);
}

.hero-image {
  width: 100%;
  height: 120%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8));
}

.hero-text {
  position: absolute;
  bottom: 10%;
  left: 10%;
  z-index: 2;
}

.hero-text h1 {
  font-size: 5rem;
  color: #fff;
}

.hero-text .subtitle {
  font-size: 1.5rem;
  color: var(--accent-color);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.specs-section {
  display: flex;
  justify-content: space-around;
  padding: 4rem 2rem;
  background-color: #0a0a0a;
  border-bottom: 1px solid #222;
}

.spec-item {
  text-align: center;
}

.spec-value {
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.spec-label {
  font-size: 1rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.details-content {
  padding: 8rem 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.text-block h2 {
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #fff;
}

.text-block p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #aaa;
}
</style>
