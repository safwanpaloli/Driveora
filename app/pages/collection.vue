<template>
  <div class="page-container collection-page">
    <div class="header">
      <h1 class="display-text" ref="title">Our Collection</h1>
      <p class="subtitle" ref="subtitle">A curated selection of the world's most exquisite machines.</p>
    </div>

    <div class="car-list">
      <div v-for="(car, index) in cars" :key="index" class="car-item" :ref="(el) => carItems[index] = el">
        <div class="car-image">
          <img :src="car.image" :alt="car.name" />
        </div>
        <div class="car-info">
          <h2>{{ car.name }}</h2>
          <p>{{ car.description }}</p>
          <NuxtLink :to="`/details?id=${index}`" class="btn outline">View Details</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const title = ref(null)
const subtitle = ref(null)
const carItems = ref([])

const cars = [
  { name: 'Apex V8', description: 'The pinnacle of naturally aspirated power.', image: '/images/hero.jpg' },
  { name: 'Aero GT', description: 'Sleek, silent, and terrifyingly fast.', image: '/images/side.jpg' },
  { name: 'Nebula Luxe', description: 'Uncompromising comfort in the fast lane.', image: '/images/interior.jpg' }
]

onMounted(() => {
  gsap.fromTo(title.value, 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  )
  gsap.fromTo(subtitle.value, 
    { y: 20, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
  )

  carItems.value.forEach((item, i) => {
    gsap.fromTo(item,
      { y: 100, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        }
      }
    )
  })
})
</script>

<style scoped>
.header {
  padding: 6rem 4rem 2rem;
  text-align: center;
}

.header h1 {
  font-size: 4rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.header .subtitle {
  font-size: 1.2rem;
  color: #888;
}

.car-list {
  padding: 2rem 4rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.car-item {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
  align-items: center;
}

.car-item:nth-child(even) {
  grid-template-columns: 2fr 3fr;
}

.car-item:nth-child(even) .car-info {
  grid-row: 1;
}

.car-image {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.car-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.car-item:hover .car-image img {
  transform: scale(1.05);
}

.car-info h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Syncopate', sans-serif;
}

.car-info p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #aaa;
  margin-bottom: 2rem;
}

.btn.outline {
  display: inline-block;
  padding: 0.8rem 2rem;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  text-decoration: none;
  font-family: 'Syncopate', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn.outline:hover {
  background-color: var(--accent-color);
  color: #000;
}
</style>
