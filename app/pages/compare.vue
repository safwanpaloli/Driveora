<template>
  <div class="page-container compare-page">
    <div class="header">
      <h1 class="display-text" ref="title">Compare Models</h1>
    </div>
    
    <div class="compare-table-wrapper" ref="tableWrapper">
      <table class="compare-table">
        <thead>
          <tr>
            <th></th>
            <th>Apex V8</th>
            <th>Aero GT</th>
            <th>Nebula Luxe</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in compareData" :key="idx" class="compare-row">
            <td class="feature-name">{{ row.feature }}</td>
            <td>{{ row.apex }}</td>
            <td>{{ row.aero }}</td>
            <td>{{ row.nebula }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const title = ref(null)
const tableWrapper = ref(null)

const compareData = [
  { feature: 'Engine', apex: '4.0L Twin-Turbo V8', aero: 'Dual Electric Motors', nebula: '6.0L W12' },
  { feature: 'Horsepower', apex: '720 hp', aero: '1020 hp', nebula: '650 hp' },
  { feature: '0-60 mph', apex: '2.8s', aero: '1.9s', nebula: '3.5s' },
  { feature: 'Top Speed', apex: '211 mph', aero: '200 mph', nebula: '190 mph' },
  { feature: 'Price (Base)', apex: '$350,000', aero: '$250,000', nebula: '$400,000' }
]

onMounted(() => {
  gsap.fromTo(title.value, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
  gsap.fromTo(tableWrapper.value, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3 })
  
  gsap.fromTo('.compare-row', 
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, delay: 0.5 }
  )
})
</script>

<style scoped>
.compare-page {
  padding: 6rem 4rem;
}
.header { text-align: center; margin-bottom: 4rem; }
.header h1 { font-size: 4rem; color: var(--accent-color); }

.compare-table-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.compare-table th {
  font-family: 'Syncopate', sans-serif;
  font-size: 1.5rem;
  padding: 2rem 1rem;
  color: #fff;
  border-bottom: 2px solid var(--accent-color);
}

.compare-table td {
  padding: 1.5rem 1rem;
  font-size: 1.1rem;
  border-bottom: 1px solid #333;
  color: #ccc;
}

.feature-name {
  text-align: left;
  font-weight: bold;
  color: #fff;
}
</style>
